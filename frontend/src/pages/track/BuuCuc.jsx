import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getProvinces, getDistrictsByProvinceCode } from 'sub-vn';
import { IoLocationOutline } from 'react-icons/io5';

import { END_POINT } from '../../utils/constant';

export default function BuuCuc() {
	const [provinces, setProvinces] = useState([]);
	const [districts, setDistricts] = useState([]);
	const [provinceSelected, setProvinceSelected] = useState(null);
	const [districtSelected, setDistrictSelected] = useState(null);
	const [isValid, setIsValid] = useState(true);
	const [result, setResult] = useState([]);

	// get all provinces
	useEffect(() => {
		setProvinces(getProvinces());
	}, []);

	// get all districts by province code
	useEffect(() => {
		setDistricts(getDistrictsByProvinceCode(provinceSelected));
	}, [provinceSelected]);

	const handleSubmit = async () => {
		// check empty field
		if (!provinceSelected || !districtSelected) {
			setIsValid(false);
			return;
		}

		try {
			// find province and district by code
			let province =
				provinces?.find((province) => province.code === provinceSelected)
					?.name || '';
			let district =
				districts?.find((district) => district.code === districtSelected)
					?.name || '';

			// replace Thành phố || Tỉnh to empty
			province = province.replace('Thành phố ', '').replace('Tỉnh ', '');

			
			const res = await axios.get(`${END_POINT}/tracking/warehouse`, {
				params: {
					province,
					district,
				},
			});

			setResult(res.data.data);
			setIsValid(true);
		} catch (error) {
			alert('Có lỗi xảy ra, thử chọn 1 địa điểm khác!');
		}
	};

	return (
		<div style={{ 
			maxWidth: "1200px",
			margin:"auto"
		 }}>
			<div className="flex items-center flex-col lg:flex-row gap-[24px]">
				<div className="w-full h-[43px] lg:w-1/3">
					<select
						style={{ border: '1px solid black' }}
						id="city"
						className="search-select w-full h-full  "
						onChange={(e) => setProvinceSelected(e.target.value)}
					>
						<option data-select2-id="select2-data-81-rsyi" value="">
							Tỉnh/ Thành phố
						</option>

						{provinces?.length > 0 &&
							provinces.map((province) => (
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
					{!isValid && !provinceSelected && (
						<div className="text-[#F0B90B] ">Vui lòng chọn tỉnh/thành phố</div>
					)}
				</div>
				<div className="w-full  h-[43px] lg:w-1/3 ">
					<select
						style={{ border: '1px solid black' }}
						id="district"
						className=" w-full h-full  "
						onChange={(e) => setDistrictSelected(e.target.value)}
					>
						<option value="">Quận/ Huyện</option>

						{districts?.length > 0 &&
							districts.map((district) => (
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
					{!isValid && !districtSelected && (
						<div className="text-[#F0B90B] ">Vui lòng chọn quận/huyện</div>
					)}
				</div>
				<div className="text-center w-full lg:w-1/3" onClick={handleSubmit}>
					<button className="text-white bg-[#e5a663] rounded-[2px] min-h-[44px] w-full font-semibold">
						Tìm kiếm bưu cục
					</button>
				</div>
			</div>

			{/* result */}
			<div className="mt-14 flex flex-wrap">
				{result?.length > 0 ? (
					result.map((warehouse) => (
						<div id="bill" className="w-1/2 px-10 lg:px-0">
							<div className="m-2 bg-[#FFF2F4] min-h-[140px] rounded-[10px] border-[#fdb0b0] border flex items-center">
								<div className="p-6">
									<p className="text-[#F0B90B] font-black text-[20px] mb-1">
										{warehouse.name}
									</p>

									<div className="flex items-baseline">
										<div className="w-4 h-4 pt-0.5 mr-2">
											<IoLocationOutline />
										</div>
										<span className="text-[16px] font-medium mb-0">
											{warehouse.street}
										</span>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<div id="bill" className="w-full px-10 lg:px-0">
						<div className="m-2 bg-[#FFF2F4] min-h-[100px] rounded-[10px] border-[#fdb0b0] border flex items-center justify-center">
							<div className="p-6">
								<p className="text-[#F0B90B] font-black text-[20px] mb-1">
									Không có kết quả
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
