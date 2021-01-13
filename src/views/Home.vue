<template>
    <div class="list-area">
        <v-row>
            <v-col v-for="(work, id) in works" :key="id">
                <v-card class="mx-auto rounded-xl pa-5 card-list">
                    <div class="d-flex justify-space-between align-center mb-4">
                        <v-card-title class="pa-0 d-flex flex-column align-start subtitle-1 font-weight-medium text-truncate">
                            {{ work.title }}
                            <div class="caption grey--text font-weight-medium">
                                {{ work.year }}
                            </div>
                        </v-card-title>
                        <v-btn fab :small="$vuetify.breakpoint.smAndUp" elevation="0" @click="openDialog(work)" v-if="work.details"
                            ><v-icon color="primary">mdi-text-box-search-outline</v-icon>
                        </v-btn>
                        <v-btn fab :small="$vuetify.breakpoint.smAndUp" elevation="0" @click="openWindow(work.link)" v-if="work.link"><v-icon color="primary">mdi-open-in-new</v-icon> </v-btn>
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
                            <v-chip small outlined class="text-uppercase">
                                {{ type }}
                            </v-chip>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-if="open" scrollable v-model="open">
            <v-card>
                <v-card-title class="d-flex justify-space-between">
                    <span class="title">{{ dialogData.title }}</span>
                    <v-btn icon class="grey--text white" text @click="open = false">
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pt-3">
                    <v-row v-for="(d, id) in dialogData.details" :key="id">
                        <v-col v-for="(img, i) in d.imgs" :key="i" cols="12" sm="6" md="4">
                            <v-img height="230" :src="require(`@/assets/design/${img}.png`)" position="left top" class="rounded-xl"></v-img>
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
</style>

<script>
export default {
    name: 'Home',
    data: () => ({
        open: false,
        dialogData: null,
        works: [
            {
                year: '2020/07 ~ 10',
                title: '강진군도서관 반응형 연습',
                img: 'design_2020_07',
                types: ['PUBLISING'],
                details: [
                    {
                        id: 1,
                        imgs: ['design_2020_07', 'design_2020_07', 'design_2020_07', 'design_2020_07', 'design_2020_07', 'design_2020_07', 'design_2020_07'],
                        title: '강진군도서관 반응형 연습',
                    },
                ],
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
            },
            {
                year: '2020/05',
                title: '하루 기록장',
                img: 'design_2020_04',
                types: ['APP', 'DESIGN', 'IONIC'],
            },
            {
                year: '2020/04',
                title: '대전시청 반응형 연습',
                img: 'design_2020_02',
                types: ['PUBLISING'],
            },
            {
                year: '2020/04',
                title: '국가슈퍼컴퓨팅센터 반응형 연습',
                img: 'design_2020_03',
                types: ['DESIGN', 'PUBLISING'],
            },
            {
                year: '2019/09 ~ 10 ',
                title: '국가슈퍼컴퓨팅센터',
                img: 'design_2020_01',
                types: ['DESIGN'],
            },
            {
                year: '2019/09',
                title: '특허청 메인페이지',
                img: 'design_2019_01',
                types: ['DESIGN', 'PUBLISING', '웹표준/웹접근성'],
            },
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
