import { scylla } from '../test-env/src/index'

export default async () => {
	await scylla.setup()
}
