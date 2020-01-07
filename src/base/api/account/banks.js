
export const formModel = [
	{
		prop:'pulishDate',
		label:'筛选时间',
		width:290,
		elemType:'datetimerange'
	},{
		prop:'state',
		label:'状态',
		elemType:'select',
		col:'label',
		colVal:'value',
		defaultValue:0,
		options:[
			{
				label:'有效卡号',
				value:0
			},{
				label:'无效卡号',
				value:1
			}
		]
	},{
		label:'高级搜索',
		group:true,
		childs:[
			{
				prop:'newsType',
				label:'',
				classes:'noRadiusRight',
				width:120,
				elemType:'select',
				col:'label',
				colVal:'value',
				defaultValue:0,
				options:[
					{
						label:'用户名',
						value:0
					},{
						label:'电话号码',
						value:1
					},{
						label:'银行卡号码',
						value:2
					}
				]
			},{
				prop:'content',
				label:'',
				elemType:'input',
				classes:'noRadiusLeft',
				placeholder:'请输入...'
			}
		]
	}
]



export const tableModel = [
	{
		type:'selection',
		width:50,
		align:'center'
	},{
		type:'index',
		width:50,
		align:'center'
	},{
		prop:'createTime',
		label:'申请时间',
		align:'center'
	},{
		prop:'name',
		label:'姓名',
		align:'center'
	},{
		prop:'phone',
		label:'电话',
		align:'center'	
	},{
		prop:'bankName',
		label:'开户行',
		align:'center'
	},{
		prop:'bankCardNo',
		label:'银行卡号',
		align:'center'
	}
]

export const tableData = [
	{
		id:'appNews1',
		name:'赵四',
		phone:'13632353639',
		bankName:'中国银行',
		bankCardNo:'6235345844651654556',
		dealPerson:'唐朝',
		createTime:'2018-01-15 21:15:25',
		state:0
	}
]
