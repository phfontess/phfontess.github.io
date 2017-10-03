<template>
	<div class="app-container">
		<app-header class="app-header"></app-header>
		<img src="./assets/img/user.jpg" class="img-circle" alt="">
		<transition name="slide" mode="out-in">
			<router-view class="app-router"></router-view>
		</transition>
	</div>
</template>

<script>
import Header from './assets/Shared/Header.vue'
export default {
	components: {
		appHeader: Header
	}
}
</script>

<style scoped>
.app-container {
	display: grid;
	background-color: lightgrey;
	grid-template-columns: 1fr 6fr 1fr;
	grid-auto-rows: minmax(70px, auto)
}

@media (max-width: 500px) {
	.app-container {
		grid-auto-rows: minmax(70px, auto)
	}
}

.app-header {
	grid-column-start: 1;
	grid-column-end: 4;
}

img {
	width: 200px;
	grid-column: 2/3;
	height: auto;
	align-self: center;
	justify-self: center;
}

.app-router {
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row: 3/10;
	display: grid;
	grid-auto-rows: minmax(40px, 100px)
}

.slide-enter-active {
	animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
	animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
	from {
		transform: translateY(-30px);
		opacity: 0
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0);
		opacity: 1
	}
	to {
		transform: translateY(-30px);
		opacity: 0;
	}
}
</style>


