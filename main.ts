input.onButtonPressed(Button.A, function () {
    devices.raiseAlertTo(MesAlertEvent.DisplayToast)
    basic.showString("Yes")
})
input.onButtonPressed(Button.B, function () {
    devices.raiseAlertTo(MesAlertEvent.DisplayToast)
    basic.showString("No")
})
