<template>
    <div class="list-area">
        <v-row>
            <v-col v-for="(work, i) in works" :key="i">
                <v-card class="mx-auto rounded-xl pa-5">
                    <div class="d-flex justify-space-between align-center">
                        <div>
                            <v-card-title class="pa-0 d-flex flex-column align-start subtitle-1 font-weight-medium text-truncate">
                                {{ work.title }}
                                <div class="caption grey--text font-weight-medium">
                                    {{ work.year }}
                                </div>
                            </v-card-title>
                            <v-card-text class="px-0 mt-1  grey--text ">
                                {{ work.description }}
                            </v-card-text>
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
                            <v-chip small outlined class="text-uppercase">
                                {{ type }}
                            </v-chip>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <div class="mb-5 mt-10 mb-sm-0 text-center text-sm-right"><v-btn color="primary" class="rounded-pill" href="https://swai-p.tistory.com/" target="_blank">more view</v-btn></div>
    </div>
</template>

<style lang="scss" scoped>
.list-area {
    margin-bottom: 7.5rem;
    @media #{map-get($display-breakpoints, 'xs-only')} {
        margin-bottom: 0;
    }
}
.v-card {
    transition: 0.5s !important;
    box-shadow: none !important;
    &:hover {
        transform: translateY(-1%);
        box-shadow: 0 0 40px rgba(#000, 0.25) !important;
    }
}
.v-card__text {
    letter-spacing: 0;
    line-height: 1.4;
    font-size: 0.8rem;
}
</style>

<script>
export default {
    name: 'PreviousWorks',
    data: () => ({
        works: [
            {
                title: '천안시 생활체육공원',
                img: 'design_2012_01',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 건설사업소',
                img: 'design_2012_02',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },

            {
                title: '천안시 서울사무소',
                img: 'design_2012_03',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 농업기술센터',
                img: 'design_2012_04',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 열린시장실',
                img: 'design_2012_05',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '석오이동녕기념관',
                img: 'design_2012_06',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안박물관',
                img: 'design_2012_07',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 문화공연',
                img: 'design_2012_08',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 하늘그린',
                img: 'design_2012_07',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 도서관',
                img: 'design_2012_10',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 동남구보건소',
                img: 'design_2012_11',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 자치법규',
                img: 'design_2012_12',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 시민문화여성회관',
                img: 'design_2012_13',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 외국어',
                img: 'design_2012_15',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 문화관광',
                img: 'design_2012_16',
                types: ['PUBLISING', 'DESIGN', '웹표준/웹접근성'],
                description: '천안시 홈페이지 서비스 고도화 / 유지보수 사업',
            },
            {
                title: '천안시 일자리종합지원센터',
                img: 'design_2012_14',
                types: ['PUBLISING', 'DESIGN'],
                description: '천안시 일자리종합지원센터 지원정보시스템 구축 사업',
            },
            {
                title: '중소기업청',
                img: 'design_2012_18',
                types: ['DESIGN', '웹표준'],
                description: '메인/서브 디자인, 웹표준',
            },
            {
                title: '제품 패키지',
                img: 'design_2012_19',
                types: ['Package'],
            },
            {
                title: '홍보용 카달로그',
                img: 'design_2012_20',
                types: ['Catalog'],
            },
            {
                title: '국토 EXPO 홍보자료용 리플렛',
                img: 'design_2012_21',
                types: ['Catalog'],
            },
        ],
    }),
};
</script>
