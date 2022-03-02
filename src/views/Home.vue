<template>
    <div class="list-area">
        <v-row>
            <v-col v-for="(work, id) in works.slice().reverse()" :key="id">
                <v-card class="mx-auto rounded-xl pa-5 card-list">
                    <div class="d-flex justify-space-between align-center mb-4">
                        <v-card-title
                            class="pa-0 d-flex flex-column align-start subtitle-1 font-weight-medium text-truncate"
                        >
                            {{ work.title }}
                            <div class="caption grey--text font-weight-medium">{{ work.year }}</div>
                        </v-card-title>
                        <div>
                            <v-btn
                                fab
                                :small="$vuetify.breakpoint.smAndUp"
                                elevation="0"
                                @click="openDialog(work)"
                                v-if="work.details"
                            >
                                <v-icon color="primary">mdi-text-box-search-outline</v-icon>
                            </v-btn>
                            <v-btn
                                fab
                                :small="$vuetify.breakpoint.smAndUp"
                                elevation="0"
                                @click="openWindow(work.link)"
                                v-if="work.link"
                                class="ml-1"
                            >
                                <v-icon color="primary">mdi-open-in-new</v-icon>
                            </v-btn>
                        </div>
                    </div>
                    <v-img
                        aspect-ratio="1"
                        height="250"
                        min-width="250"
                        class="rounded-lg"
                        :src="require(`@/assets/design/${work.img}.png`)"
                        position="left top"
                        style="border:solid 1px #f3f3f3"
                    ></v-img>
                    <v-row class="mt-2 pa-1">
                        <v-col v-for="(type, i) in work.types" :key="i" class="flex-grow-0 pa-1">
                            <v-chip small outlined class="text-uppercase">{{ type }}</v-chip>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-if="open" scrollable v-model="open" width="900">
            <v-card>
                <v-card-title class="d-flex justify-space-between px-5">
                    <span class="title text-truncate" style="width:80%">{{ dialogData.title }}</span>
                    <v-btn icon class="grey--text white" text @click="open = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pt-5">
                    <v-row v-for="(d, id) in dialogData.details" :key="id">
                        <v-col
                            v-for="(image, i) in d.images"
                            :key="i"
                            cols="12"
                            sm="6"
                            v-viewer="{
                                button: false,
                                navbar: false,
                                title: false,
                                toolbar: false,
                            }"
                        >
                            <img
                                height="250"
                                width="100%"
                                :src="require(`@/assets/design/${image}.png`)"
                                class="rounded-lg dialog-img"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<style lang="scss" scoped>
.list-area {
    margin-bottom: 7.5rem;
    @media #{map-get($display-breakpoints, 'xs-only')} {
        margin-bottom: 0;
    }
}
.card-list {
    transition: 0.5s !important;
    box-shadow: none !important;
    &:hover {
        transform: translateY(-1%);
        box-shadow: 0 0 40px rgba(#000, 0.25) !important;
    }
}
.dialog-img {
    object-fit: cover;
    object-position: center top;
    border: solid 1px #f3f3f3;
    cursor: pointer;
}
</style>

<script>
export default {
    name: 'Home',
    data: () => ({
        open: false,
        dialogData: null,
        works: [
            {
                year: '2020/11',
                title: '기초과학연구원 자원신청사이트',
                img: 'design_2020_08',
                types: ['PUBLISING', 'DESIGN', '반응형'],
                // link: '/2020/gjlib/index.html',
                details: [
                    {
                        id: 1,
                        images: ['design_2020_08', 'design_2020_08_02', 'design_2020_08_03', 'design_2020_08_04', 'design_2020_08_05', 'design_2020_08_06'],
                        title: '기초과학연구원 자원신청사이트',
                    },
                ],
            },
            {
                year: '2021/01 - 03',
                title: '지하매설물 관리 시스템',
                img: 'bauger_01',
                types: ['PUBLISING', 'DESIGN', '반응형'],
                details: [
                    {
                        id: 1,
                        images: ['bauger_01', 'bauger_02', 'bauger_03', 'bauger_04'],
                        title: '지하매설물 관리 시스템',
                    },

                ],
            },
            {
                year: '2021/04',
                title: '운동타이머',
                img: 'healthtimer',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.healthtimer&hl=ko',
            },
            {
                year: '2021/04',
                title: '하루기록장',
                img: 'onedaydiary',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.onedaydiary&hl=ko',
            },
            {
                year: '2021/04',
                title: '충남대학교 식당메뉴',
                img: 'cnucafeteria',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.cnucafeteria&hl=ko',
            },
            {
                year: '2021/05',
                title: '지출 기록장',
                img: 'outgoingrecord',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.outgoingrecord&hl=ko',
            },
            {
                year: '2021/05',
                title: '레시피 재료비율 계산기',
                img: 'recipecalculator',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.recipe.calculator&hl=ko',
            },
            {
                year: '2021/05',
                title: '경조사비 기록장',
                img: 'eventInout',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.event.inout&hl=ko',
            },
            {
                year: '2021.05',
                title: '장바구니 메모',
                img: 'shoppinglist',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.shoppinglist',
            },
            {
                year: '2021/06',
                title: '나침반과 소음측정',
                img: 'compass',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.compass',
            },
            {
                year: '2021/06',
                title: '총무의 계산기 - 심플한 더치페이 계산기',
                img: 'dutchpay',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.dutchpay',
            },
            {
                year: '2021/06',
                title: '체중 기록장 - 다이어트 체중/식단 기록 관리',
                img: 'weight-diary',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.weightdiary',
            },
            {
                year: '2021.06',
                title: '물때정보',
                img: 'tide-time',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.tidetime',
            },
            {
                year: '2021/07',
                title: '이름 주소 영문변환',
                img: 'romanizer',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.romanizer',
            },
            {
                year: '2021/08',
                title: '전기요금 계산기',
                img: 'elecprice',
                types: ['PUBLISING', 'DESIGN', 'QUASAR'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.elecprice',
            },
            {
                year: '2021/07 - 10',
                title: '대전문화재단 생활문화포털',
                img: 'culture_01',
                types: ['PUBLISING', 'DESIGN', '반응형'],
                description: '대전문화재단 생활문화 지원사업 공모신청 및 관리 사이트, Backend : SpringBoot, Frontend : Vue/Quasar',
                link: 'https://artlife.dcaf.or.kr',
                details: [
                    {
                        id: 1,
                        images: ['culture_01', 'culture_02', 'culture_03', 'culture_04', 'culture_05', 'culture_06', 'culture_07', 'culture_08'],
                        title: '대전문화재단 생활문화포털',
                    },

                ],
            },
            {
                year: '2021/11 - 12',
                title: '부고로 사이트 ',
                img: 'bugoro_01',
                types: ['PUBLISING', 'DESIGN', '반응형'],
                description: '부고알림, 화환주문, LMS/카카오톡 메시지 전송, 관리자 모드, 반응형 웹사이트, Backend : Node.js/nestjs, Frontend : Vue/Quasar',
                link: 'https://부고로.com',
                /* details: [
                    {
                        id: 1,
                        images: ['bugoro_01', 'bugoro_02', 'bugoro_03', 'bugoro_04', 'bugoro_05', 'bugoro_06', 'bugoro_07', 'bugoro_08'],
                        title: '부고로 사이트',
                    },], */
            },
            {
                year: '2022/01 - 02',
                title: '대전금융복지상담센터',
                img: 'gbsinbo_01',
                types: ['PUBLISING', 'DESIGN', '반응형'],
                link: 'https://www.gbsinbo.or.kr',
                details: [
                    {
                        id: 1,
                        images: ['gbsinbo_01', 'gbsinbo_02', 'gbsinbo_03', 'gbsinbo_04'],
                        title: '대전금융복지상담센터',
                    },

                ],
            },
            /* {
                year: '2020/07 ~ 10',
                title: '강진군도서관 반응형 연습',
                img: 'design_2020_07',
                types: ['PUBLISING', '반응형'],
                link: '/2020/gjlib/index.html',
            },
            {
                year: '2020/05',
                title: '내 주변 마스크',
                img: 'design_2020_06',
                types: ['APP', 'DESIGN', 'IONIC'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.whereismymask',
            },
            {
                year: '2020/05',
                title: '지출 기록장',
                img: 'design_2020_05',
                types: ['APP', 'DESIGN', 'IONIC'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.outgoingrecord',
            },
            {
                year: '2020/05',
                title: '하루 기록장',
                img: 'design_2020_04',
                types: ['APP', 'DESIGN', 'IONIC'],
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.onedaydiary',
            },
            {
                year: '2020/04',
                title: '대전시청 반응형 연습',
                img: 'design_2020_02',
                types: ['PUBLISING', '반응형'],
                link: '/2020/daejeon/index.html',
            },
            {
                year: '2020/04',
                title: '국가슈퍼컴퓨팅센터 반응형 연습',
                img: 'design_2020_03',
                types: ['DESIGN', 'PUBLISING', '반응형'],
                link: '/2020/kisti_02/index.html',
            }, */

        ],
    }),
    methods: {
        openDialog(work) {
            this.open = true;
            this.dialogData = work;
        },
        openWindow(link) {
            window.open(link);
        },
    },
};
</script>
