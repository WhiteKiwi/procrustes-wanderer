import Joi from '@hapi/joi'
import { DEFAULT_PORT, DEFAULT_SCYLLA } from './default'
import { ENVIRONMENT } from './constants'
import { ENVIRONMENT as ENV } from '../utils/constants'

export default Joi.object({
	PORT: Joi.number().empty('').default(DEFAULT_PORT),
	ENVIRONMENT: Joi.string()
		.empty('')
		.valid(...Object.keys(ENV))
		.default(ENV.DEVELOPMENT),
	SCYLLA_END_POINTS: Joi.string()
		.empty('')
		.default(DEFAULT_SCYLLA.END_POINTS)
		.when(ENVIRONMENT, [
			{
				is: ENV.PRODUCTION,
				then: Joi.string().required(),
			},
			{
				is: ENV.STATGING,
				then: Joi.string().required(),
			},
		]),
	SCYLLA_KEY_SPACE: Joi.string()
		.empty('')
		.default(DEFAULT_SCYLLA.KEY_SPACE)
		.when(ENVIRONMENT, [
			{
				is: ENV.PRODUCTION,
				then: Joi.string().required(),
			},
			{
				is: ENV.STATGING,
				then: Joi.string().required(),
			},
		]),
	SCYLLA_DATA_CENTER: Joi.string()
		.empty('')
		.default(DEFAULT_SCYLLA.DATA_CENTER)
		.when(ENVIRONMENT, [
			{
				is: ENV.PRODUCTION,
				then: Joi.string().required(),
			},
			{
				is: ENV.STATGING,
				then: Joi.string().required(),
			},
		]),
	SCYLLA_USER_NAME: Joi.string()
		.empty('')
		.default(DEFAULT_SCYLLA.USER_NAME)
		.when(ENVIRONMENT, [
			{
				is: ENV.PRODUCTION,
				then: Joi.string().required(),
			},
			{
				is: ENV.STATGING,
				then: Joi.string().required(),
			},
		]),
	SCYLLA_PASSWORD: Joi.string()
		.empty('')
		.default(DEFAULT_SCYLLA.PASSWORD)
		.when(ENVIRONMENT, [
			{
				is: ENV.PRODUCTION,
				then: Joi.string().required(),
			},
			{
				is: ENV.STATGING,
				then: Joi.string().required(),
			},
		]),
})
