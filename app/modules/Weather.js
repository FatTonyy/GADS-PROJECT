class Weather {
	constructor(city, country) {
		this.apiKey = "f0e9366650c1d3d44f973eeb31e0b7a0";
		this.city = city;
		this.country = country;
	}

	//! Fetch weather from API
	async getWeather() {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
		);

		const responseData = await response.json();

		return responseData;
	}

	//!change location
	changeLocation(city, country) {
		this.city = city;
		this.country = country;
	}
}

export default Weather;
