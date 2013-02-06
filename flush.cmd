@echo off

rmdir ConsoleServer /s /q

for /R %%i in (.) do rmdir "%%i\Debug" /s /q
for /R %%i in (.) do rmdir "%%i\Release" /s /q
for /R %%i in (.) do rmdir "%%i\obj" /s /q
for /R %%i in (.) do rmdir "%%i\bin" /s /q
for /R %%i in (.) do rmdir "%%i\TestShadowCopy" /s /q
for /R %%i in (.) do rmdir "%%i\TestResults" /s /q
 
REM FOR /F "tokens=*" %%G IN ('DIR /B /S /AH *.suo') DO del "%%G" /AH
REM FOR /F "tokens=*" %%G IN ('DIR /B /S *.user') DO del "%%G" 
FOR /F "tokens=*" %%G IN ('DIR /B /S *.gpState') DO del "%%G" 
FOR /F "tokens=*" %%G IN ('DIR /B /S *.xap') DO del "%%G" 

FOR /F "tokens=*" %%G IN ('DIR /B /S DebugLog*') DO del "%%G" 
FOR /F "tokens=*" %%G IN ('DIR /B /S *.bak.*.orm') DO del "%%G" 

FOR /F "tokens=*" %%G IN ('DIR /B /S *.incr') DO del "%%G" 
REM FOR /F "tokens=*" %%G IN ('DIR /B /S *.pdb') DO del "%%G" 
FOR /F "tokens=*" %%G IN ('DIR /B /S *.aqt') DO del "%%G" 
FOR /F "tokens=*" %%G IN ('DIR /B /S *.msi') DO del "%%G" 
FOR /F "tokens=*" %%G IN ('DIR /B /S *.tmp') DO del "%%G" 


