create table am_general_beta.am_analysis_capacity_allocation
(
	id int auto_increment
		primary key,
	depart_id varchar(36) null comment '场站ID',
	stock_ratio decimal(5,2) null comment '股权比例',
	full_capacity decimal(32,2) null comment '全口径装机容量',
	hold_capacity decimal(32,2) null comment '控股装机容量',
	right_capacity decimal(32,2) null comment '权益装机容量'
)
comment '场站容量分配';

create table am_general_beta.am_analysis_cost_month
(
	id int auto_increment
		primary key,
	month date not null comment '月份',
	depart_id varchar(32) null comment '部门',
	cost_type_id int not null comment '成本类型',
	cost decimal(32,4) null comment '成本'
)
comment '月度成本表';

create table am_general_beta.am_analysis_cost_type
(
	id int auto_increment
		primary key,
	name varchar(100) null comment '类型名称',
	is_main tinyint(1) null comment '是否主营'
)
comment '成本类型';

create table am_general_beta.am_analysis_income_detail
(
	id int auto_increment
		primary key,
	income_id int not null comment '月度收入表ID',
	trans_type int not null comment '交易类型',
	sale_energy decimal(32,4) null comment '售电量',
	sale_income decimal(32,4) null comment '售电收入'
)
comment '交易电量收入';

create table am_general_beta.am_analysis_income_month
(
	id int auto_increment
		primary key,
	month date null comment '月份',
	departId varchar(32) null comment '部门Id',
	base_energy decimal(32,4) null comment '基数电量',
	public_subsidies decimal(32,4) null comment '国补',
	local_subsidies decimal(32,4) null comment '地补',
	investment_income decimal(32,4) null comment '投资收益',
	other_income decimal(32,4) null comment '其他收益',
	other_business decimal(32,4) null comment '其他业务',
	operating_income decimal(32,4) null comment '营业外',
	other_cost decimal(32,4) null comment '两个细则考核及其他费用'
)
comment '月度收入';

create table am_general_beta.am_analysis_plan_cost_year
(
	id int auto_increment
		primary key,
	year date null comment '年份',
	depart_id varchar(32) null comment '部门Id',
	cost_type int not null comment '成本类型',
	cost decimal(32,4) null comment '成本'
)
comment '年度计划成本表';

create table am_general_beta.am_analysis_plan_income_year
(
	id int auto_increment
		primary key,
	year date null comment '年份',
	depart_id varchar(32) null comment '部门Id',
	sale_energy decimal(32,4) null comment '售电量',
	sale_energy_income decimal(32,4) null comment '售电收入',
	other_business_income decimal(32,4) null comment '其他业务收入'
)
comment '年度计划收入表';

create table am_general_beta.am_analysis_produce_month
(
	id int auto_increment
		primary key,
	departId varchar(32) null comment '部门id',
	month date null comment '月份',
	generating_energy decimal(32,5) null comment '发电量',
	on_grid_energy decimal(32,5) null comment '上网电量',
	purchasing_energy decimal(32,5) null comment '购网电量',
	failure_hour decimal(10,2) null comment '故障小时数',
	theory_generating_energy decimal(32,5) null comment '理论发电量',
	average_wind_velocity decimal(10,2) null comment '平均风速',
	failure_loss_energy int null comment '故障损失电量',
	availability decimal(10,2) null comment '可利用率',
	equivalent_utilization_hours decimal(10,2) null comment '等效利用小时数',
	abandon_energy decimal(32,5) null comment '弃风/光电量',
	abandon_energy_rate decimal(10,2) null comment '弃风/光率',
	integrated_utilization_rate decimal(10,2) null comment '综合场用电率'
);

create table am_general_beta.am_analysis_trans_type
(
	id int auto_increment
		primary key,
	typename varchar(32) not null comment '交易类型',
	typecode varchar(32) not null comment '编码'
);

alter table am_general_beta.am_aqgl_activity_daily modify act_type varchar(32) null comment '活动类型';

alter table am_general_beta.am_aqgl_operate
	add current_state varchar(50) null;

alter table am_general_beta.am_aqgl_standorder modify id varchar(108) null;

alter table am_general_beta.am_aqgl_standorder modify create_by varchar(150) null;

alter table am_general_beta.am_aqgl_standorder modify create_date datetime null;

alter table am_general_beta.am_aqgl_standorder modify update_name varchar(150) null;

alter table am_general_beta.am_aqgl_standorder modify update_by varchar(150) null;

alter table am_general_beta.am_aqgl_standorder modify update_date datetime null;

alter table am_general_beta.am_aqgl_standorder modify sys_org_code varchar(150) null;

alter table am_general_beta.am_aqgl_standorder modify sys_company_code varchar(150) null;

alter table am_general_beta.am_aqgl_standorder modify bpm_status varchar(96) null;

alter table am_general_beta.am_aqgl_standorder modify wfid varchar(108) null;

alter table am_general_beta.am_aqgl_standorder modify tictype varchar(150) null;

alter table am_general_beta.am_aqgl_standorder modify modelname varchar(600) null;

alter table am_general_beta.am_aqgl_standorder modify creater varchar(108) null;

alter table am_general_beta.am_aqgl_standorder modify createtime varchar(300) null;

alter table am_general_beta.am_aqgl_standorder modify state varchar(96) null;

alter table am_general_beta.am_aqgl_standorder modify current_task varchar(600) null;

alter table am_general_beta.am_aqgl_standorder modify number varchar(300) null;

alter table am_general_beta.am_aqgl_standorder modify root_depart_id varchar(150) null;

alter table am_general_beta.am_aqgl_standorder
	add status varchar(96) null;

create table am_general_beta.am_aqgl_test
(
	id varchar(36) not null comment '主键'
		primary key,
	create_name varchar(50) null comment '创建人名称',
	create_by varchar(50) null comment '创建人登录名称',
	create_date datetime null comment '创建日期',
	update_name varchar(50) null comment '更新人名称',
	update_by varchar(50) null comment '更新人登录名称',
	update_date datetime null comment '更新日期',
	title varchar(200) null comment '标题',
	test_date datetime null comment '考试时间',
	departid varchar(36) null comment '所属场站',
	attachment varchar(4000) null comment '附件'
);

create table am_general_beta.am_aqgl_test_score
(
	id varchar(36) not null
		primary key,
	testid varchar(36) null comment '考试id',
	test_person varchar(36) null comment '答题人',
	score double null comment '分数',
	remark longtext null comment '内容',
	attachment longtext null comment '附件'
);

alter table am_general_beta.am_aqgl_typical
	add status varchar(50) null;

alter table am_general_beta.am_inspection_plan modify enable varchar(1) null comment '启用禁用';

alter table am_general_beta.am_inspection_plan_detail modify id varchar(36) not null comment '主键';

alter table am_general_beta.am_inspection_plan_detail modify placeid varchar(8000) null comment '巡检点id';

alter table am_general_beta.am_inspection_plan_detail drop column routeid;

alter table am_general_beta.am_inspection_sheet modify id varchar(36) not null comment '主键';

alter table am_general_beta.am_inspection_sheet modify inspector varchar(4000) null comment '巡检人员';

alter table am_general_beta.am_inspection_sheet modify wo_id varchar(36) null comment '巡检单编码';

alter table am_general_beta.am_inspection_sheet modify placeid varchar(8000) null comment '巡检点id';

alter table am_general_beta.am_inspection_sheet modify create_date datetime null;

alter table am_general_beta.am_inspection_sheet drop column routeid;

alter table am_general_beta.am_inspection_template modify template_type varchar(20) null;

alter table am_general_beta.am_jxgl_overhual drop column code;

alter table am_general_beta.am_jxgl_overhual
	add title varchar(100) null comment '标题';

alter table am_general_beta.am_jxgl_overhual_record drop column overhual_code;

create table am_general_beta.am_pxgl_training_plan
(
	id varchar(36) not null
		primary key,
	create_name varchar(50) null comment '创建人名称',
	create_by varchar(50) null comment '创建人登录名称',
	create_date datetime null comment '创建日期',
	update_name varchar(50) null comment '更新人名称',
	update_by varchar(50) null comment '更新人登录名称',
	update_date datetime null comment '更新日期',
	title varchar(200) null comment '名称',
	year datetime null comment '年份',
	departid varchar(36) null comment '所属场站',
	remark longtext null comment '备注'
);

create table am_general_beta.am_pxgl_training_record
(
	id varchar(36) not null comment '主键'
		primary key,
	create_name varchar(50) null comment '创建人名称',
	create_by varchar(50) null comment '创建人登录名称',
	create_date datetime null comment '创建日期',
	update_name varchar(50) null comment '更新人名称',
	update_by varchar(50) null comment '更新人登录名称',
	update_date datetime null comment '更新日期',
	planid varchar(36) null comment '培训计划id',
	departid varchar(36) null comment '所属场站',
	title varchar(200) null comment '名称',
	date datetime null comment '培训月份',
	plan_type varchar(20) null comment '计划类型',
	duration int(4) null comment '培训时长分钟',
	mode varchar(20) null comment '培训方式',
	way varchar(20) null comment '培训形式',
	purpose varchar(4000) null comment '培训目的',
	content varchar(4000) null comment '培训内容',
	budget decimal(9) null comment '培训预算',
	trainee_number int(9) null comment '培训人数',
	nature varchar(20) null comment '培训性质',
	trainee_classify varchar(20) null comment '培训对象',
	trainee_type varchar(20) null comment '培训对象类型',
	instructor varchar(32) null comment '培训讲师',
	instructor_type varchar(20) null comment '培训讲师类型',
	evaluation_method varchar(20) null comment '考核方式',
	actual_cost decimal(9) null comment '实际培训费',
	actual_date datetime null comment '实际培训时间',
	recorder varchar(32) null comment '记录人员',
	trainee varchar(4000) null comment '培训人员',
	remark varchar(4000) null comment '备注',
	attachment varchar(4000) null comment '附件'
);

alter table am_general_beta.am_qxgl_defect
	add close_time datetime null;

alter table am_general_beta.am_sbgl_equipment_detail_v2 modify id varchar(108) not null;

create index am_sbgl_equipment_detail_v2_equ_small_category_index
	on am_general_beta.am_sbgl_equipment_detail_v2 (equ_small_category);

alter table am_general_beta.am_sbgl_equipment_detail_v2
	add primary key (id);

alter table am_general_beta.am_sbgl_equipment_v2 modify id varchar(108) not null;

alter table am_general_beta.am_sbgl_equipment_v2
	add primary key (id);

create table am_general_beta.am_sparepart_batch_inspect_record
(
	id varchar(36) not null comment '主键'
		primary key,
	title longtext null comment '标题',
	depart_id varchar(36) null comment '场站id',
	duty_user_id varchar(36) null comment '负责人id',
	inspection_date timestamp null comment '送检日期',
	trial_start_date timestamp null comment '试验开始日期',
	trial_end_date timestamp null comment '试验结束日期',
	records longtext null comment '工器具信息列表'
);

create table am_general_beta.am_wf_org_copy
(
	id varchar(36) not null
		primary key,
	create_name varchar(50) null comment '创建人名称',
	create_by varchar(50) null comment '创建人登录名称',
	create_date datetime null comment '创建日期',
	update_name varchar(50) null comment '更新人名称',
	update_by varchar(50) null comment '更新人登录名称',
	update_date datetime null comment '更新日期',
	sys_org_code varchar(50) null comment '所属部门',
	sys_company_code varchar(50) null comment '所属公司',
	bpm_status varchar(32) default '1' null comment '流程状态',
	wf_id varchar(36) null comment '风场ID',
	org_id varchar(36) null comment '组织ID'
);

alter table am_general_beta.am_windfarm_info modify wf_x int null comment '经度';

alter table am_general_beta.am_windfarm_info modify wf_y int null comment '纬度';

alter table am_general_beta.am_windfarm_info modify wfid varchar(60) null comment '场站id';

alter table am_general_beta.am_windfarm_info modify departname varchar(100) null comment '场站名称';

create table am_general_beta.am_windfarm_info_copy
(
	id varchar(36) not null
		primary key,
	create_name varchar(50) null comment '创建人名称',
	create_by varchar(50) null comment '创建人登录名称',
	create_date datetime null comment '创建日期',
	update_name varchar(50) null comment '更新人名称',
	update_by varchar(50) null comment '更新人登录名称',
	update_date datetime null comment '更新日期',
	sys_org_code varchar(50) null comment '所属部门',
	sys_company_code varchar(50) null comment '所属公司',
	bpm_status varchar(32) default '1' null comment '流程状态',
	wf_name varchar(100) null comment '场站名称',
	wf_invest_name varchar(100) null comment '场站别名',
	wf_capability double null comment '容量',
	wt_amount int null comment '风机台数',
	wf_adress varchar(100) null comment '风场地址',
	wf_principal varchar(60) null comment '场站负责人',
	wf_linkman varchar(60) null comment '联系人',
	wf_linkphone varchar(50) null comment '联系电话',
	wf_linkemail varchar(60) null comment '邮箱',
	comment varchar(200) null comment '备注',
	wf_x int null comment '经度',
	wf_y int null comment '纬度',
	wf_abbreviation varchar(60) null comment '场站缩写',
	province_id varchar(60) null comment '省份ID',
	height double null comment '海拔高度',
	scadawfids varchar(60) null comment 'SCADA号',
	wfid varchar(60) null comment '场站id',
	departname varchar(100) null comment '场站名称',
	component_count int null,
	kks_code varchar(100) null comment 'KKS编码',
	wftype int null comment '风场类型(7:风 8:光 11:风光)',
	wfcode int null comment '风场代码',
	isdemo int default 0 null comment '是否演示风场（1:是，0:不是）',
	del_flag int default 0 null comment '1:删除，0:正常'
);

alter table am_general_beta.am_workorder modify current_task varchar(32) null comment '当前任务';

alter table am_general_beta.am_wz_billdetail alter column num set default 0;

alter table am_general_beta.am_wz_storemateriel alter column suminnum set default 0;

alter table am_general_beta.am_wz_storemateriel alter column sumoutnum set default 0;

alter table am_general_beta.am_wz_storemateriel alter column curinrnum set default 0;

alter table am_general_beta.am_xmgl_attachment modify file_library_id varchar(100) not null comment '文件系统id';

alter table am_general_beta.t_s_doc modify source_id longtext null comment '资源id值';

alter table am_general_beta.t_s_doc modify doc_name varchar(200) null comment '文档名';

create table am_general_beta.t_s_doc_catalog_relation
(
	id varchar(32) not null comment 'id'
		primary key,
	doc_id varchar(32) null comment '文档',
	catalog_id varchar(32) null comment '目录'
);

alter table am_general_beta.t_s_doc_down modify doc_id longtext null comment '文档';

create table am_general_beta.t_s_doc_download
(
	id varchar(32) not null comment 'id'
		primary key,
	doc_id varchar(32) null comment '文档',
	user_id varchar(32) null comment '下载用户',
	download_count int null comment '下载次数',
	last_time datetime null comment '最近下载时间'
);

alter table am_general_beta.t_s_file modify file_code longtext null comment '文件code';

alter table am_general_beta.t_s_file modify file_name varchar(200) null comment '文件名';

alter table am_general_beta.tb_scgl_inspection_plan modify id varchar(36) not null;

alter table am_general_beta.tb_scgl_inspection_plan modify wf_id varchar(32) not null;

alter table am_general_beta.tb_scgl_inspection_plan modify category varchar(50) not null;

alter table am_general_beta.tb_scgl_inspection_plan modify plan_start datetime null;

alter table am_general_beta.tb_scgl_inspection_plan modify plan_end datetime null;

alter table am_general_beta.tb_scgl_inspection_plan modify inspection_device varchar(1600) null;

alter table am_general_beta.tb_scgl_inspection_plan modify state varchar(2) null;

alter table am_general_beta.tb_scgl_inspection_plan modify comment varchar(400) null;

alter table am_general_beta.tb_scgl_inspection_plan modify del_flag varchar(1) null;

alter table am_general_beta.tb_scgl_inspection_plan modify create_name varchar(50) null;

alter table am_general_beta.tb_scgl_inspection_plan modify create_by varchar(50) null;

alter table am_general_beta.tb_scgl_inspection_plan modify create_date datetime null;

alter table am_general_beta.tb_scgl_inspection_plan modify update_name varchar(50) null;

alter table am_general_beta.tb_scgl_inspection_plan modify update_by varchar(50) null;

alter table am_general_beta.tb_scgl_inspection_plan modify update_date datetime null;

alter table am_general_beta.tb_scgl_inspection_plan modify sys_company_code varchar(50) null;

alter table am_general_beta.tb_scgl_inspection_plan modify template_id varchar(600) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify id varchar(36) not null;

alter table am_general_beta.tb_scgl_inspection_work_order modify create_name varchar(50) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify create_by varchar(50) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify update_name varchar(50) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify update_by varchar(50) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify sys_company_code varchar(50) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify create_date datetime null;

alter table am_general_beta.tb_scgl_inspection_work_order modify update_date datetime null;

alter table am_general_beta.tb_scgl_inspection_work_order modify wf_id varchar(36) not null;

alter table am_general_beta.tb_scgl_inspection_work_order modify plan_id varchar(36) not null;

alter table am_general_beta.tb_scgl_inspection_work_order modify name varchar(100) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify start_date datetime null;

alter table am_general_beta.tb_scgl_inspection_work_order modify start_end datetime null;

alter table am_general_beta.tb_scgl_inspection_work_order modify category varchar(2) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify inspection_device varchar(6600) not null;

alter table am_general_beta.tb_scgl_inspection_work_order modify state varchar(32) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify del_flag varchar(1) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify inspector varchar(360) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify group_id varchar(36) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify file_path varchar(200) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify comment varchar(200) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify classs varchar(1) null;

alter table am_general_beta.tb_scgl_inspection_work_order modify wo_id varchar(36) null;

