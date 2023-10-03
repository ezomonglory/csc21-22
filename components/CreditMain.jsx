import React from "react";
import CreditHeader from "./CreditHeader";
import { creditData } from "../data";
import CreditCard from "./CreditCard";
import Image from "next/image";

const CreditMain = () => {
	return (
		<>
			<div className=' flex-col w-full  items-center  overflow-hidden hidden md:flex mb-[100px]'>
				<div className='md:flex justify-between mb-0 w-full '>
					{creditData.map((data, i) => {
						if (i < 3) {
							return <CreditCard key={i} index={i} data={data} />
						}
					})}
				</div>

				<div className='flex justify-between mb-0 w-[60%] '>
					{creditData.map((data, i) => {
						if (i >= 3 && i < 5) {
							return <CreditCard key={i} index={i} data={data} />
						}
					})}
				</div>

				<div className='flex justify-between mb-0 w-[24%] '>
					{creditData.map((data, i) => {
						if (i === 5) {
							return <CreditCard key={i} index={i} data={data} />
						}
					})}
				</div>
			</div>

			<div className="block md:hidden mb-[56px] animate overflow-hidden">
				{creditData.map((data, i) => {
					if (i === 0) {
						return (
							<div key={i} className='flex justify-start mb-[64px]'>
								{" "}
								<CreditCard key={i} index={i} data={data} />{" "}
							</div>
						)
					}
				})}

				{creditData.map((data, i) => {
					if (i === 1) {
						return (
							<div key={i} className='flex justify-end mb-[64px]'>
								{" "}
								<CreditCard key={i} index={i} data={data} />{" "}
							</div>
						);
					}
				})}

				{creditData.map((data, i) => {
					if (i === 2) {
						return (
							<div key={i} className='flex justify-start mb-[64px]'>
								{" "}
								<CreditCard key={i} index={i} data={data} />{" "}
							</div>
						);
					}
				})}

				{creditData.map((data, i) => {
					if (i === 3) {
						return (
							<div key={i} className='flex justify-end mb-[64px]'>
								{" "}
								<CreditCard key={i} index={i} data={data} />{" "}
							</div>
						);
					}
				})}

				{creditData.map((data, i) => {
					if (i === 4) {
						return (
							<div key={i} className='flex justify-start mb-[64px] '>
								{" "}
								<CreditCard key={i} index={i} data={data} />{" "}
							</div>
						);
					}
				})}

				{creditData.map((data, i) => {
					if (i === 5) {
						return (
							<div key={i} className='flex justify-end'>
								{" "}
								<CreditCard key={i} index={i} data={data} />{" "}
							</div>
						);
					}
				})}
			</div>
		</>
	);
};

export default CreditMain;
