@echo off
chcp 65001 >nul
echo ============================================
echo   DanMachi - 生产环境打包
echo ============================================
echo.
cd /d "%~dp0"

echo [1/2] 打包代码...
call pnpm build
if %errorlevel% neq 0 (
    echo [ERROR] 打包失败！
    pause
    exit /b 1
)
echo.

echo [2/2] 打包角色卡...
call pnpm sync bundle all
echo.

echo ============================================
echo   打包完成！
echo   输出: dist\
echo ============================================
pause
