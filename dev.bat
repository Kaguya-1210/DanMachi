@echo off
chcp 65001 >nul
echo ============================================
echo   DanMachi - 开发环境启动
echo   实时编译 + 酒馆热更新
echo ============================================
echo.
cd /d "%~dp0"
pnpm watch
