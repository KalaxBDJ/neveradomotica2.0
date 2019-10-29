#include <ESP8266HTTPClient.h>

#include <ESP8266HTTPClient.h>

#include <ESP8266HTTPClient.h>

#include <config.h>
#include <HX711_ADC.h>

#include <ArduinoJson.h>

/**
   BasicHTTPClient.ino

    Created on: 24.05.2015

*/

#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include <HX711_ADC.h>


HX711_ADC LoadCell(4,0);
long t;

const char* ssid = "KALAX_RED";
const char* password =  "KALAX_RED";
float temperatura = 0;

int contador = 0;

String category[2]={"temperatura","peso"};

void setup() {
  delay(10);
  Serial.begin(38400);


  WiFi.begin(ssid, password);

  Serial.print("Conectando...");
  while (WiFi.status() != WL_CONNECTED) { //Check for the connection
    delay(500);
    Serial.print(".");
  }

  Serial.print("Conectado con éxito, mi IP es: ");
  Serial.println(WiFi.localIP());

  //Modulo de peso setup
  Serial.println("Wait...");
  LoadCell.begin();
  long stabilisingtime = 2000; // tare preciscion can be improved by adding a few seconds of stabilising time
  LoadCell.start(stabilisingtime);
  LoadCell.setCalFactor(544.00); // user set calibration factor (float)
  Serial.println("Startup + tare is complete");

}

void loop() {

  String data_string;

  if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status

  if(contador==0)
  {
    String categoria=category[0];
    temperatura = (3.3 * analogRead(0)*100)/1024;
    data_string = "valor="+String(temperatura)+"&category="+categoria;
    contador++;
  }
  else
  {
    //update() should be called at least as often as HX711 sample rate; >10Hz@10SPS, >80Hz@80SPS
    //longer delay in scetch will reduce effective sample rate (be carefull with delay() in loop)
    LoadCell.update();

    //get smoothed value from data set + current calibration factor
    if (millis() > t + 250) 
    {
    float i = LoadCell.getData();
    Serial.print("Load_cell output val: ");
    Serial.println(i);
    t = millis();
    }

    //receive from serial terminal
    if (Serial.available() > 0) {
    float i;
    char inByte = Serial.read();
    if (inByte == 't') LoadCell.tareNoDelay();
    }

    //check if last tare operation is complete
    if (LoadCell.getTareStatus() == true) {
    Serial.println("Tare complete");
    digitalRead(6);
    }

   contador=0;
  }
  
    
    

    HTTPClient http;
    String datos_a_enviar = data_string;

    http.begin("http://192.168.1.11:3001/api/mediciones");        //Indicamos el destino
    http.addHeader("Content-Type", "application/x-www-form-urlencoded"); //Preparamos el header text/plain si solo vamos a enviar texto plano sin un paradigma llave:valor.
    
    int codigo_respuesta = http.POST(datos_a_enviar);   //Enviamos el post pasándole, los datos que queremos enviar. (esta función nos devuelve un código que guardamos en un int)
    
    if(codigo_respuesta>0){
      Serial.println("Código HTTP ► " + String(codigo_respuesta));   //Print return code

      if(codigo_respuesta == 200){
        String cuerpo_respuesta = http.getString();
        Serial.println("El servidor respondió ▼ ");
        Serial.println(cuerpo_respuesta);

      }

    }else{

     Serial.print("Error enviando POST, código: ");
     Serial.println(codigo_respuesta);

    }

    http.end();  //libero recursos

  }else{

     Serial.println("Error en la conexión WIFI");

  }

   delay(10000);
}
