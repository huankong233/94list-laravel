<?php

namespace App\Http\Middleware;

use App\Models\Group;
use App\Models\User;
use Closure;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Encryption\Encrypter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Symfony\Component\HttpFoundation\Response;

class NeedInstall
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $dbFile = database_path("database.sqlite");
        if (!file_exists($dbFile)) {
            file_put_contents($dbFile, "");

            $key = "base64:" . base64_encode(Encrypter::generateKey(config("app.cipher")));

            // 写入key
            updateEnv("APP_KEY", $key);
            config(["app.key" => $key]);

            // 导入sql
            $installSql = database_path("sql/sqlite.sql");
            DB::unprepared(file_get_contents($installSql));
            $installSql = database_path("sql/tokens.sql");
            DB::unprepared(file_get_contents($installSql));

            Group::query()->create([
                "id"    => 0,
                "name"  => "默认分组",
                "count" => 10,
                "size"  => 20
            ]);

            Group::query()->create([
                "id"    => -1,
                "name"  => "游客分组",
                "count" => 5,
                "size"  => 20
            ]);

            // 添加用户
            User::query()->create([
                "username"    => "admin",
                "password"    => Hash::make("admin"),
                "role"        => "admin",
                "group_id"    => 0,
                "inv_code_id" => -1
            ]);
        }

        if (!Schema::hasTable("tokens")) {
            $installSql = database_path("sql/tokens.sql");
            DB::unprepared(file_get_contents($installSql));
        } else if (Schema::getColumnType("tokens", "day") === "text") {
            DB::beginTransaction();
            Schema::rename("tokens", "tokens_old");

            $sqlPath = database_path("sql/tokens.sql");
            DB::unprepared(file_get_contents($sqlPath));

            $tokens = DB::table("tokens_old")->get();
            foreach ($tokens as $token) {
                DB::table("tokens")->insert([
                    "id"         => $token->id,
                    "name"       => $token->name,
                    "day"        => (int)$token->day,
                    "count"      => $token->count,
                    "size"       => $token->size,
                    "expired_at" => $token->expired_at,
                    "created_at" => $token->created_at,
                    "updated_at" => $token->updated_at,
                ]);
            }

            Schema::drop("tokens_old");

            DB::commit();
        }

        if (!in_array("prov", Schema::getColumnListing("accounts"))) {
            DB::beginTransaction();

            Schema::rename("accounts", "accounts_old");

            $sqlPath = database_path("sql/accounts.sql");
            DB::unprepared(file_get_contents($sqlPath));

            $tokens = DB::table("accounts_old")->get();
            foreach ($tokens as $token) {
                DB::table("accounts")->insert([
                    "id"           => $token->id,
                    "baidu_name"   => $token->baidu_name,
                    "netdisk_name" => $token->netdisk_name,
                    "cookie"       => $token->cookie,
                    "vip_type"     => $token->vip_type,
                    "switch"       => $token->switch,
                    "reason"       => $token->reason,
                    "prov"         => null,
                    "svip_end_at"  => $token->svip_end_at,
                    "last_use_at"  => $token->last_use_at,
                    "created_at"   => $token->created_at,
                    "updated_at"   => $token->updated_at,
                    "deleted_at"   => $token->deleted_at,
                ]);
            }

            Schema::drop("accounts_old");

            DB::commit();
        }

        return $next($request);
    }
}
