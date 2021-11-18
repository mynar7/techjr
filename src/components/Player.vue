<template lang="pug">
div(@mouseleave="() => handleShowVolume(false)")
    progress(:value="progressValue" max='1' @click="setTime" ref="progressBar")
    .controls
        button(@click="play") {{ buttonText }}
        .volumeControls 
            label(for="volume" tabindex="0" @click="() => handleShowVolume(!showVolume)" @focus="() => handleShowVolume(true)") {{volumeIcon}}
            input(v-show="showVolume" @blur="() => handleShowVolume(false)" type="range" id="volume" min="0" max="100" v-model="volume")
        span {{current}} / {{duration}}
    .download
        a(:href="audioRef.src" download target="__BLANK") Download Link
        span (Right click, "Save Link As")
</template>

<script>
export default {
    data() {
        return {
            duration: '00:00:00',
            current: '00:00:00',
            progressValue: 0,
            volume: 50,
            showVolume: false,
            buttonText: 'LOADING',
        }
    },
    props: [
        'audioRef'
    ],
    mounted() {
        const savedVolume = window.localStorage.getItem('volume')
        if (savedVolume) {
            this.volume = +savedVolume
            this.audioRef.volume = +savedVolume / 100
        }
        let retries = 0
        const checkReady = () => {
            if (this.audioRef.readyState === 4) {
                this.buttonText = 'PLAY'
                this.current = this.formatTime(this.audioRef.currentTime)
                this.duration = this.formatTime(this.audioRef.duration)
                this.audioRef.ontimeupdate = () => {
                    this.current = this.formatTime(this.audioRef.currentTime)
                    const percentComplete = this.audioRef.currentTime / this.audioRef.duration
                    this.progressValue = percentComplete
                    if (this.audioRef.currentTime === this.audioRef.duration) {
                        this.buttonText = 'PLAY'
                    }
                    this.duration = this.formatTime(this.audioRef.duration)
                }
            } else if (retries < 10) {
                retries++
                setTimeout(() => checkReady(), 1000)
            }
        }
        checkReady()
    },
    watch: {
        volume(newVolume) {
            this.audioRef.volume = newVolume / 100
            window.localStorage.setItem('volume', newVolume)
        }
    },
    computed: {
        volumeIcon() {
            return this.volume >= 80
            ? "🔊"
            : this.volume < 80 && this.volume >= 30
            ? "🔉"
            : this.volume < 30 && this.volume > 0
            ? "🔈"
            : "🔇"
        }
    },
    methods: {
        play() {
            if(this.buttonText === 'LOADING') return
            if (this.audioRef.paused) {
                this.audioRef.play()
                this.buttonText = 'PAUSE'
            } else {
                this.audioRef.pause()
                this.buttonText = 'PLAY'
            }
        },
        handleShowVolume(value) {
            this.showVolume = value
        },
        setTime(e) {
            const clickLocation = e.pageX - this.$refs.progressBar.offsetLeft
            const totalWidth = this.$refs.progressBar.offsetWidth
            const clickPercentage = clickLocation / totalWidth
            this.progressValue = clickPercentage
            this.audioRef.currentTime = clickPercentage * this.audioRef.duration
        },
        formatTime(seconds) {
            const _seconds = Math.floor(seconds % 60)
            const _minutes = Math.floor(seconds / 60 % 60)
            const _hours = Math.floor(seconds / 60 / 60 % 60)
            const secStr = _seconds < 10 ? '0' + _seconds : String(_seconds)
            const minStr = _minutes < 10 ? '0' + _minutes : String(_minutes)
            const hrStr = _hours < 10 ? '0' + _hours : String(_hours)
            return `${hrStr}:${minStr}:${secStr}`
        }
    }
}
</script>

<style lang="stylus" scoped>
progress
    width 100%
    height 30px

progress[value]
    -webkit-appearance none
    appearance none

progress[value]::-webkit-progress-bar
    background-color #eee
    border-radius 5px
    box-shadow 0 2px 5px rgba(0, 0, 0, 0.25) inset

progress[value]::-webkit-progress-value
    // background var(--secondary)
    background-image repeating-linear-gradient(-45deg, var(--secondary) 0%, var(--secondaryDark) 20%, var(--secondary) 40%)
    background-size: 35px 50px, 100% 100%, 100% 100%;
    border-radius 5px
    /*   background-size 35px 20px, 100% 100%, 100% 100% */

.controls
    display flex
    justify-content flex-end
    align-items center
    flex-wrap wrap
    .volumeControls
        display flex
        align-items center
        input
            margin 0
            appearance none
            border-radius 5px
            height 5px
            background var(--secondary)
            opacity 0.8
            transition opacity 200ms
            &:hover, &:focus
                opacity 1
            &::-webkit-slider-thumb
                -webkit-appearance none
                appearance none
                width 10px
                height 20px
                border-radius 5px
                background var(--primary)
            &::-moz-range-thumb
                -webkit-appearance none
                appearance none
                width 10px
                height 20px
                border-radius 5px
                background var(--primary)

button
    margin-right auto
    padding 10px
    width 100px
    border none
    background var(--primary)
    color var(--white)
    border-radius 5px
    transition background 0.2s
    &:hover
        background var(--primaryDark)
        cursor pointer

.download
    display flex
    flex-direction column
    justify-content flex-end
    align-items flex-end
    font-size 0.9rem
    a
        color var(--secondaryDark)
    span
        font-size 0.8rem
</style>
