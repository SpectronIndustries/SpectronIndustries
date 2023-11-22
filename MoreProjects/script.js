fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vTsTHf1LQTApfz-DfLzXOxJGrMixgIVFiPuAhL_FQrGR1b38rUV4BtN1QnabNTSjVo0yCIve66zo2uP/pub?gid=2072746737&single=true&output=tsv")
		.then((res) => res.text())
		.then((text) => {
			createProjectRows(text);
		})
		.catch((e) => console.error(e));