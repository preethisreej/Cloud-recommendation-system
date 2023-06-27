import React, { Component } from "react";

class ServiceSelect extends Component {
	handleChange = (event) => {
		let value = event.target.value;

		if (value !== "Select") {
			this.props.onChange(value);
		} else {
			this.props.onClear();
		}
	};

	render() {
		const { serviceProd = "AWS" } = this.props;
		return (
			<label className="pt-label pt-inline">
				<span className={"form-label"}>{serviceProd} Service</span>
				<div className={"pt-select"}>
					<select
						onChange={this.handleChange}
						className={"service-select"}
					>
						<option selected>Select</option>
						{this.props.services
							.sort((a, b) =>
								a.ServiceCode.toLowerCase().localeCompare(
									b.ServiceCode.toLowerCase()
								)
							)
							.map((s, index) => (
								<option key={index} value={s.ServiceCode}>
									{serviceProd !== 'AWS'
										? s.ServiceCode.replace("Amazon", "GCP")
												.replace("AWS", "GCP")
												.replace(
													"AlexaTopSites",
													"Google Bot"
												)
										: s.ServiceCode}
								</option>
							))}
					</select>
				</div>
			</label>
		);
	}
}

export default ServiceSelect;
