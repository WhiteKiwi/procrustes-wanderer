export default () => ({
	PORT: process.env.PORT,
	ENVIRONMENT: process.env.ENVIRONMENT,
	SCYLLA: {
		END_POINTS: process.env.SCYLLA_END_POINTS,
		KEY_SPACE: process.env.SCYLLA_KEY_SPACE,
		DATA_CENTER: process.env.SCYLLA_DATA_CENTER,
		USER_NAME: process.env.SCYLLA_USER_NAME,
		PASSWORD: process.env.SCYLLA_PASSWORD,
	},
})
