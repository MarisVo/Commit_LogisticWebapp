import React, { useEffect, useState } from 'react';

import { getProvinces, getDistrictsByProvinceCode } from 'sub-vn';

export default function BuuCuc() {
	const [provincesTo, setProvincesTo] = useState([]);
	const [districtsTo, setDistrictsTo] = useState([]);

	const [provinceCodeTo, setProvinceCodeTo] = useState(null);
	const [districtCodeTo, setDistrictCodeTo] = useState(null);

	const [isValid, setIsValid] = useState(true);

	// get all provinces
	useEffect(() => {
		setProvincesTo(getProvinces());
	}, []);

	// get all districts by province code
	useEffect(() => {
		setDistrictsTo(getDistrictsByProvinceCode(provinceCodeTo));
	}, [provinceCodeTo]);

	const handleSubmit = () => {
		// check empty field
		if (!provinceCodeTo || !districtCodeTo) {
			setIsValid(false);
			return;
		}

		setIsValid(true);
	};

	return (
		<div className="h-[150px]">
			<div className="flex items-center flex-col lg:flex-row gap-[24px]">
				<div className="w-full h-[43px] lg:w-1/3">
					<select
						style={{ border: '1px solid black' }}
						id="city"
						className="search-select w-full h-full  "
						onChange={(e) => setProvinceCodeTo(e.target.value)}
					>
						<option data-select2-id="select2-data-81-rsyi" value="">
							Tỉnh/ Thành phố
						</option>

						{provincesTo?.length > 0 &&
							provincesTo.map((province) => (
								<option
									className="text-[#161D25]"
									value={province.code}
									key={province.code}
								>
									{province.name}
								</option>
							))}
					</select>
					<span style={{ width: '345.337px' }}>
						<span className="selection">
							<span>
								<span title="Tỉnh/ Thành phố">Tỉnh/ Thành phố</span>
								<span>
									<b />
								</span>
							</span>
						</span>
						<span />
					</span>
					{!isValid && !provinceCodeTo && (
						<div className="text-[#FF0000] ">Vui lòng chọn tỉnh/thành phố</div>
					)}
				</div>
				<div className="w-full  h-[43px] lg:w-1/3 ">
					<select
						style={{ border: '1px solid black' }}
						id="district"
						className=" w-full h-full  "
						onChange={(e) => setDistrictCodeTo(e.target.value)}
					>
						<option value="">Quận/ Huyện</option>

						{districtsTo?.length > 0 &&
							districtsTo.map((district) => (
								<option
									className="text-[#161D25]"
									value={district.code}
									key={district.code}
								>
									{district.name}
								</option>
							))}
					</select>
					<span style={{ width: '345.337px' }}>
						<span>
							<span>
								<span title="Quận/huyện">Quận/huyện</span>
								<span>
									<b />
								</span>
							</span>
						</span>
						<span />
					</span>
					{!isValid && !districtCodeTo && (
						<div className="text-[#FF0000] ">Vui lòng chọn quận/huyện</div>
					)}
				</div>
				<div className="text-center w-full lg:w-1/3" onClick={handleSubmit}>
					<button className="text-white bg-[#FF0000] rounded-[2px] min-h-[44px] w-full font-semibold">
						Tìm kiếm bưu cục
					</button>
				</div>
			</div>
		</div>
	);
}
