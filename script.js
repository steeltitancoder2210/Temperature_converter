function convertTemperature() {
    conversionType = document.getElementById("conversion").value;
    const temperatureInput = document.getElementById("temperature").value;
    const result = document.getElementById("result");
    
if (conversionType === "cel") {
    const convertedTemperature = (  temperatureInput* 9/5) + 32;
    result.textContent = `${ temperatureInput}°C = ${convertedTemperature.toFixed(2)}°F`;
  } else if (conversionType === "fer") {
    const convertedTemperature = ( temperatureInput - 32) * 5/9;
    result.textContent = `${ temperatureInput}°F = ${convertedTemperature.toFixed(2)}°C`;
  } else {
    result.textContent = "Invalid conversion type";
  }
}
