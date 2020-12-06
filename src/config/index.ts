import { config } from 'dotenv'
import { ENVIRONMENT as ENV } from '../utils/constants'

config()

const ESSENTIAL_ENVIRONMENT_VARIABLES = [
]
// 필수 환경 변수들이 비어있으면 throw Error
if ( ESSENTIAL_ENVIRONMENT_VARIABLES.includes(undefined) || ESSENTIAL_ENVIRONMENT_VARIABLES.includes('')) throw new Error('⚠Missing Essential Environment Variables')

export const PORT = process.env.PORT || 3002
export const ENVIRONMENT = (process.env.ENVIRONMENT || ENV.DEVELOPMENT).toUpperCase()

export default {
	PORT,
	ENVIRONMENT,
}
