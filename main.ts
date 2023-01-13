basic.showIcon(IconNames.Heart)
ESP8266_IoT.initWIFI(SerialPin.P16, SerialPin.P2, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("AP123", "pirouette123")
basic.forever(function () {
    ESP8266_IoT.setMQTT(
    ESP8266_IoT.SchemeList.TCP,
    "d413f691-0742-44c3-b6fc-4749b0cce3ed",
    "d413f691-0742-44c3-b6fc-4749b0cce3ed",
    "PWkShnJz$drzpQ4mDeWZcAY2T934waysaObEyJYo",
    ""
    )
    ESP8266_IoT.connectMQTT("broker.qubitro.com", 8883, true)
    ESP8266_IoT.publishMqttMessage("{\\\"temperature\\\":" + input.temperature() + "}", "YOUR_QUBITRO_DEVICE_ID", ESP8266_IoT.QosList.Qos0)
    basic.pause(5000)
})
