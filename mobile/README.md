to listen backend server, please run command: adb -s <device_name> reverse tcp:backend_port tcp:backend_port
example:
    adb -s 351dec32 reverse tcp:8000 tcp:8000
    adb -s 351dec32 reverse tcp:5000 tcp:5000