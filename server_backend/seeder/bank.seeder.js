const { Bank } = require("../models/bank.model");

module.exports = async (model) => {
	await Bank.create({
		logo: "scb.png",
		code: "SCB",
		code_scb: "014",
		name: "ธนาคารไทยพาณิชย์",
		background_color: "#4E2E7E",
		font_color: "#FFFFFF",
		order: 1,
	});
	await Bank.create({
		logo: "bbl.png",
		code: "BBL",
		code_scb: "002",
		name: "ธนาคารกรุงเทพ",
		background_color: "#1E4598",
		font_color: "#FFFFFF",
		order: 2,
	});
	await Bank.create({
		logo: "ktb.png",
		code: "KTB",
		code_scb: "006",
		name: "ธนาคารกรุงไทย",
		background_color: "#18A5E1",
		font_color: "#FFFFFF",
		order: 3,
	});
	await Bank.create({
		logo: "kbank.png",
		code: "KBANK",
		code_scb: "004",
		name: "ธนาคารกสิกรไทย",
		background_color: "#148F2D",
		font_color: "#FFFFFF",
		order: 4,
	});
	await Bank.create({
		logo: "bay.png",
		code: "BAY",
		code_scb: "025",
		name: "ธนาคารกรุงศรีอยุธยา",
		background_color: "#FEC43C",
		font_color: "#FFFFFF",
		order: 5,
	});
	await Bank.create({
		logo: "gsb.png",
		code: "GSB",
		code_scb: "030",
		name: "ธนาคารออมสิน",
		background_color: "#EB188D",
		font_color: "#FFFFFF",
		order: 6,
	});
	await Bank.create({
		logo: "ttb.png",
		code: "ttb",
		code_scb: "011",
		name: "ธนาคารทหารไทยธนชาติ",
		background_color: "#FFFFFF",
		font_color: "#000000",
		order: 7,
	});
	await Bank.create({
		logo: "ghb.png",
		code: "GHB",
		code_scb: "033",
		name: "ธนาคารอาคารสงเคราะห์",
		background_color: "#FFFFFF",
		font_color: "#000000",
		order: 8,
	});
	await Bank.create({
		logo: "baac.png",
		code: "BAA",
		code_scb: "030",
		name: "ธนาคารเพื่อนการเกษตรและสหกรณ์",
		background_color: "#FFFFFF",
		font_color: "#000000",
		order: 9,
	});
	await Bank.create({
		logo: "uob.png",
		code: "UOB",
		code_scb: "024",
		name: "ธนาคารยูโอบี",
		background_color: "#FFFFFF",
		font_color: "#000000",
	});
	await Bank.create({
		logo: "lhbbank.png",
		code: "LHBANK",
		code_scb: "030",
		name: "ธนาคารแลนด์แอนด์เฮ้าส์",
		background_color: "#FFFFFF",
		font_color: "#000000",
		order: 10,
	});
	await Bank.create({
		logo: "cimb.png",
		code: "CIM",
		code_scb: "022",
		name: "ธนาคารซีไอเอ็มบี",
		background_color: "#FFFFFF",
		font_color: "#000000",
		order: 11,
	});
	await Bank.create({
		logo: "kk.png",
		code: "KKP",
		code_scb: "069",
		name: "ธนาคารเกียรตินาคินภัทร",
		background_color: "#FFFFFF",
		font_color: "#000000",
		order: 12,
	});
};
