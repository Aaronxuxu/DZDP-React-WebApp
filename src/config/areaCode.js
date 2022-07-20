const codeLists = [
  [
    { label: "中国大陆", value: "+86" },
    { label: "香港", value: "+852" },
    { label: "澳门", value: "+853" },
    { label: "台湾", value: "+886" },
    { label: "韩国", value: "+82" },
    { label: "日本", value: "+81" },
    { label: "美国", value: "+1" },
    { label: "新加坡", value: "+65" },
    { label: "马来西亚", value: "+60" },
    { label: "泰国", value: "+66" },
    { label: "越南", value: "+84" },
    { label: "菲律宾", value: "+63" },
    { label: "印度尼西亚", value: "+62" },
    { label: "意大利", value: "+39" },
    { label: "俄罗斯", value: "+7" },
    { label: "新西兰", value: "+64" },
    { label: "荷兰", value: "+31" },
    { label: "瑞典", value: "+46" },
    { label: "澳大利亚", value: "+61" },
    { label: "乌克兰", value: "+380" },
    { label: "法国", value: "+33" },
    { label: "德国", value: "+49" },
    { label: "阿富汗", value: "+93" },
    { label: "阿尔巴尼亚", value: "+355" },
    { label: "阿尔及利亚", value: "+213" },
    { label: "东萨摩亚(美)", value: "+1684" },
    { label: "安道尔", value: "+376" },
    { label: "安哥拉", value: "+244" },
    { label: "安圭拉岛(英)", value: "+1264" },
    { label: "安提瓜和巴布达", value: "+1268" },
    { label: "阿根廷", value: "+54" },
    { label: "亚美尼亚", value: "+374" },
    { label: "阿鲁巴岛", value: "+297" },
    { label: "奥地利", value: "+43" },
    { label: "阿塞拜疆", value: "+994" },
    { label: "巴林", value: "+973" },
    { label: "孟加拉国", value: "+880" },
    { label: "巴巴多斯", value: "+1246" },
    { label: "白俄罗斯", value: "+375" },
    { label: "比利时", value: "+32" },
    { label: "伯利兹", value: "+501" },
    { label: "贝宁", value: "+229" },
    { label: "百慕大群岛(英)", value: "+1441" },
    { label: "不丹", value: "+975" },
    { label: "玻利维亚", value: "+591" },
    { label: "波斯尼亚和黑塞哥维那", value: "+387" },
    { label: "博茨瓦纳", value: "+267" },
    { label: "巴西", value: "+55" },
    { label: "保加利亚", value: "+359" },
    { label: "布基纳法索", value: "+226" },
    { label: "布隆迪", value: "+257" },
    { label: "喀麦隆", value: "+237" },
    { label: "佛得角", value: "+238" },
    { label: "开曼群岛(英)", value: "+1345" },
    { label: "中非", value: "+236" },
    { label: "乍得", value: "+235" },
    { label: "智利", value: "+56" },
    { label: "哥伦比亚 ", value: "+57" },
    { label: "科摩罗", value: "+269" },
    { label: "刚果", value: "+242" },
    { label: "科克群岛(新)", value: "+682" },
    { label: "哥斯达黎加", value: "+506" },
    { label: "克罗地亚", value: "+385" },
    { label: "古巴", value: "+53" },
    { label: "塞浦路斯", value: "+357" },
    { label: "捷克", value: "+420" },
    { label: "丹麦", value: "+45" },
    { label: "吉布提", value: "+253" },
    { label: "多米尼克国", value: "+1767" },
    { label: "多米尼加共和国", value: "+1809" },
    { label: "厄瓜多尔", value: "+593" },
    { label: "埃及", value: "+20" },
    { label: "萨尔瓦多 ", value: "+503" },
    { label: "赤道几内亚", value: "+240" },
    { label: "厄立特里亚", value: "+291" },
    { label: "爱沙尼亚", value: "+372" },
    { label: "埃塞俄比亚", value: "+251" },
    { label: "福克兰群岛", value: "+500" },
    { label: "法罗群岛(丹) ", value: "+298" },
    { label: "斐济", value: "+679" },
    { label: "芬兰", value: "+358" },
    { label: "法属波里尼西亚", value: "+689" },
    { label: "加蓬", value: "+241" },
    { label: "冈比亚", value: "+220" },
    { label: "格鲁吉亚", value: "+995" },
    { label: "加纳", value: "+233" },
    { label: "直布罗陀(英)", value: "+350" },
    { label: "希腊", value: "+30" },
    { label: "格陵兰岛", value: "+299" },
    { label: "格林纳达", value: "+1473" },
    { label: "瓜德罗普岛(法)", value: "+590" },
    { label: "关岛(美)", value: "+1671" },
    { label: "危地马拉", value: "+502" },
    { label: "几内亚", value: "+224" },
    { label: "几内亚比绍", value: "+245" },
    { label: "圭亚那", value: "+592" },
    { label: "海地", value: "+509" },
    { label: "洪都拉斯", value: "+504" },
    { label: "匈牙利 ", value: "+36" },
    { label: "冰岛", value: "+354" },
    { label: "印度", value: "+91" },
    { label: "伊郎", value: "+98" },
    { label: "伊拉克 ", value: "+964" },
    { label: "爱尔兰", value: "+353" },
    { label: "以色列", value: "+972" },
    { label: "科特迪瓦", value: "+225" },
    { label: "牙买加", value: "+1876" },
    { label: "约旦", value: "+962" },
    { label: "柬埔塞", value: "+855" },
    { label: "肯尼亚", value: "+254" },
    { label: "基里巴斯", value: "+686" },
    { label: "科威特", value: "+965" },
    { label: "吉尔吉斯斯坦", value: "+996" },
    { label: "老挝", value: "+856" },
    { label: "拉脱维亚", value: "+371" },
    { label: "黎巴嫩", value: "+961" },
    { label: "莱索托", value: "+266" },
    { label: "利比里亚", value: "+231" },
    { label: "利比亚", value: "+218" },
    { label: "列支敦士登", value: "+423" },
    { label: "立陶宛", value: "+370" },
    { label: "卢森堡", value: "+352" },
    { label: "马其顿", value: "+389" },
    { label: "马达加斯加 ", value: "+261" },
    { label: "马拉维 ", value: "+265" },
    { label: "马尔代夫 ", value: "+960" },
    { label: "马里", value: "+223" },
    { label: "马耳他", value: "+356" },
    { label: "马绍尔群岛", value: "+692" },
    { label: "马提尼克(法)", value: "+596" },
    { label: "毛里塔尼亚", value: "+222" },
    { label: "毛里求斯 ", value: "+230" },
    { label: "马约特岛", value: "+262" },
    { label: "墨西哥", value: "+52" },
    { label: "密克罗尼西亚(美)", value: "+691" },
    { label: "摩纳哥", value: "+377" },
    { label: "蒙古", value: "+976" },
    { label: "蒙特塞拉特岛(英)", value: "+1664" },
    { label: "摩洛哥", value: "+212" },
    { label: "莫桑比克", value: "+258" },
    { label: "缅甸", value: "+95" },
    { label: "纳米比亚", value: "+264" },
    { label: "瑙鲁", value: "+674" },
    { label: "尼泊尔 ", value: "+977" },
    { label: "荷属安的列斯群岛 ", value: "+599" },
    { label: "新喀里多尼亚群岛(法)", value: "+687" },
    { label: "尼加拉瓜", value: "+505" },
    { label: "尼日尔", value: "+227" },
    { label: "尼日利亚 ", value: "+234" },
    { label: "纽埃岛(新)", value: "+683" },
    { label: "诺福克岛(澳) ", value: "+672" },
    { label: "朝鲜", value: "+850" },
    { label: "马里亚纳群岛", value: "+1670" },
    { label: "挪威", value: "+47" },
    { label: "阿曼", value: "+968" },
    { label: "巴基斯坦", value: "+92" },
    { label: "帕劳(美)", value: "+680" },
    { label: "巴拿马", value: "+507" },
    { label: "巴布亚新几内亚", value: "+675" },
    { label: "巴拉圭 ", value: "+595" },
    { label: "秘鲁", value: "+51" },
    { label: "波兰", value: "+48" },
    { label: "葡萄牙", value: "+351" },
    { label: "卡塔尔", value: "+974" },
    { label: "摩尔多瓦", value: "+373" },
    { label: "罗马尼亚 ", value: "+40" },
    { label: "卢旺达 ", value: "+250" },
    { label: "阿森松(英)", value: "+247" },
    { label: "圣赫勒拿", value: "+290" },
    { label: "圣克里斯托弗和尼维斯 ", value: "+1869" },
    { label: "圣卢西亚 ", value: "+1758" },
    { label: "圣皮埃尔岛及密克隆岛 ", value: "+508" },
    { label: "圣文森特岛(英) ", value: "+1784" },
    { label: "西萨摩亚 ", value: "+685" },
    { label: "圣马力诺", value: "+378" },
    { label: "圣多美和普林西比", value: "+239" },
    { label: "沙特阿拉伯", value: "+966" },
    { label: "塞内加尔", value: "+221" },
    { label: "塞舌尔 ", value: "+248" },
    { label: "塞拉利昂 ", value: "+232" },
    { label: "斯洛伐克 ", value: "+94" },
    { label: "苏丹", value: "+249" },
    { label: "苏里南", value: "+597" },
    { label: "斯威士兰", value: "+268" },
    { label: "瑞士", value: "+41" },
    { label: "叙利亚", value: "+963" },
    { label: "塔吉克斯坦", value: "+992" },
    { label: "巴哈马国", value: "+1242" },
    { label: "梵蒂冈 ", value: "+14397" },
    { label: "多哥", value: "+228" },
    { label: "汤加", value: "+676" },
    { label: "特立尼达和多巴哥", value: "+1868" },
    { label: "突尼斯 ", value: "+216" },
    { label: "土耳其", value: "+90" },
    { label: "土库曼斯坦", value: "+993" },
    { label: "特克斯和凯科斯群岛(英)", value: "+1649" },
    { label: "图瓦卢", value: "+688" },
    { label: "乌干达", value: "+256" },
    { label: "英国", value: "+44" },
    { label: "坦桑尼亚", value: "+255" },
    { label: "乌拉圭", value: "+598" },
    { label: "乌兹别克斯坦", value: "+998" },
    { label: "瓦努阿图", value: "+678" },
    { label: "委内瑞拉", value: "+58" },
    { label: "维尔京群岛(英)", value: "+1340" },
    { label: "也门", value: "+967" },
    { label: "南斯拉夫", value: "+381" },
    { label: "赞比亚", value: "+260" },
    { label: "桑给巴尔", value: "+259" },
    { label: "津巴布韦", value: "+263" },
  ],
];
export default codeLists;