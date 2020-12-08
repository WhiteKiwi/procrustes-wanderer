export const DEFAULT_PORT = 3002

export default () => ({
	PORT: process.env.PORT,
	ENVIRONMENT: process.env.ENVIRONMENT,
})
