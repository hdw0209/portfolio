<template>
    <v-app>
        <v-main>
            <nav>
                <h1 class="white--text d-flex align-center">
                    PORTFOLIO
                </h1>
                <h2 class="white--text text-uppercase hidden-xs-only">
                    PUBLISING <span class="accent--text">&</span>
                    <br />
                    web/app design
                </h2>
                <v-list dense dark color="primary">
                    <v-list-item-group>
                        <v-list-item :ripple="false" v-for="(item, i) in items" :key="i" link :to="item.link" active-class="active">
                            <span>{{ item.text }}</span>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
                <div class="quick-link">
                    <v-tooltip top :disabled="$vuetify.breakpoint.xs">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn fab :small="$vuetify.breakpoint.xs" v-bind="attrs" v-on="on" href="mailto:hdkw0209@gmail.com" target="_blank"><img src="@/assets/email.svg" alt="email"/></v-btn>
                        </template>
                        <span>hdkw0209@gmail.com</span>
                    </v-tooltip>
                    <v-tooltip top :disabled="$vuetify.breakpoint.xs">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn fab :small="$vuetify.breakpoint.xs" v-bind="attrs" v-on="on" class="mx-2 mx-sm-4" href="https://github.com/hdw0209" target="_blank"
                                ><img src="@/assets/github.svg" alt="email"
                            /></v-btn>
                        </template>
                        <span>https://github.com/hdw0209</span>
                    </v-tooltip>
                    <v-tooltip top :disabled="$vuetify.breakpoint.xs">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn fab :small="$vuetify.breakpoint.xs" v-bind="attrs" v-on="on" href="https://hdw0209.github.io" target="_blank"><img src="@/assets/window.svg" alt="email"/></v-btn>
                        </template>
                        <span>PORTFOLIO Ver.1</span>
                    </v-tooltip>
                </div>
            </nav>
            <section>
                <router-view />
            </section>
        </v-main>
    </v-app>
</template>

<style lang="scss" scoped>
main {
    section {
        padding-left: 30rem;
        margin-top: 7.5rem;
        padding-right: 4rem;
        @media #{map-get($display-breakpoints, 'sm-and-down')} {
            padding-left: 23rem;
            padding: 1.5rem;
        }
    }
}
nav {
    position: fixed;
    background: linear-gradient(to right, #3a3e71 42rem, #f1f1f1 42rem);
    left: 0;
    top: 0;
    padding-top: 7.5rem;
    height: 100vh;
    width: 100%;
    @media #{map-get($display-breakpoints, 'xs-only')} {
        position: sticky;
        top: -4.5rem;
        height: auto;
        background: #3a3e71;
        padding: 2rem 0 1rem;
        z-index: 1;
    }
    > :not(.v-list) {
        padding-left: 7.5rem;
        @media #{map-get($display-breakpoints, 'sm-and-down')} {
            padding-left: 5.5rem;
        }
        @media #{map-get($display-breakpoints, 'xs-only')} {
            padding-left: 0;
        }
    }
    h1 {
        font-size: 1.8rem;
        letter-spacing: 3px;
        @media #{map-get($display-breakpoints, 'xs-only')} {
            font-size: 1.3rem;
            letter-spacing: 2px;
            margin-left: 1.5rem;
        }
    }
    h2 {
        font-weight: 500;
        line-height: 1.1;
        margin-top: 14rem;
        letter-spacing: 1px;
        font-size: 1.3rem;
    }
    .v-list {
        width: 21rem;
        margin-top: 1rem;
        @media #{map-get($display-breakpoints, 'sm-and-down')} {
            width: 17.5rem;
        }
        @media #{map-get($display-breakpoints, 'xs-only')} {
            width: auto;
            padding: 0 !important;
            margin-top: 1.5rem;
        }
    }
    .v-item-group {
        @media #{map-get($display-breakpoints, 'xs-only')} {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .v-list-item {
        position: relative;
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0.3rem;
        letter-spacing: 1px;
        @media #{map-get($display-breakpoints, 'xs-only')} {
            font-size: 1rem;
            margin: 0;
            padding: 0 !important;
        }
        &::before {
            background: linear-gradient(to right, #6387dc 40%, #4bb4cf 99%) !important;
            width: 100%;
            transition: 0.5s;
            transform: scaleX(0);
            transform-origin: left;
            border-bottom-right-radius: 32px !important;
            border-top-right-radius: 32px !important;
        }
        &:last-child {
            &::before {
                @media #{map-get($display-breakpoints, 'xs-only')} {
                    transform-origin: right;
                    border-bottom-right-radius: 0 !important;
                    border-top-right-radius: 0 !important;
                    border-bottom-left-radius: 32px !important;
                    border-top-left-radius: 32px !important;
                }
            }
        }
        span {
            white-space: nowrap;
            position: absolute;
            left: 7.5rem;
            @media #{map-get($display-breakpoints, 'sm-and-down')} {
                left: 5.5rem;
            }
            @media #{map-get($display-breakpoints, 'xs-only')} {
                left: 50%;
                transform: translateX(-50%);
            }
        }
        &.active::before {
            opacity: 1 !important;
            box-shadow: 10px 10px 30px rgba(#000, 0.2);
            background: linear-gradient(to right, #6387dc 40%, #4bb4cf 99%) !important;
            transform: scaleX(1);
        }
    }
    .quick-link {
        position: fixed;
        left: 0;
        bottom: 7.5rem;

        @media #{map-get($display-breakpoints, 'xs-only')} {
            position: absolute;
            top: 1.8rem;
            left: auto;
            right: 1rem;
        }
        .v-btn {
            transition: 0.5s;
            box-shadow: none;
            background: var(--v-primary-base) !important ;
            img {
                @media #{map-get($display-breakpoints, 'xs-only')} {
                    width: 26px;
                }
            }
            &:hover {
                background: rgba(#000, 0.1) !important;
                @media #{map-get($display-breakpoints, 'xs-only')} {
                    background: none !important;
                }
            }
        }
    }
}
</style>
<script>
export default {
    data: () => ({
        selectedItem: 1,
        items: [
            { text: '2019 ~ 2021', link: '/' },
            { text: '2004 ~ 2018', link: '/PreviousWorks' },
        ],
    }),
};
</script>
