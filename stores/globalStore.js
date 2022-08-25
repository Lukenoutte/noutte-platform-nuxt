import { defineStore } from 'pinia'
import { trendingList, mostWatchedList } from '../utils'

export const useGlobalStore = defineStore('global',
    {
        state: () => ({
            favoritedList: [],
            trendingList,
            mostWatchedList,
            showMobileMenu: false
        }),
        getters: {
            isFavorited: (state) => (idVideo) => state.favoritedList.some(item => item.id === idVideo)
        },
        actions: {
            handleFavorited(newVideo) {
                const videoAlreadyFavorited = this.favoritedList.some(item => item.id === newVideo.id)
                this.favoritedList = videoAlreadyFavorited
                    ? this.favoritedList.filter(item => item.id !== newVideo.id)
                    : [...this.favoritedList, newVideo]
            },
            setShowMobileMenu(value) {
                this.showMobileMenu = value
            },
        }
    }
)