export interface INotificationItem {
	type: 'support' | 'pay' | 'delivery'
	title: string
	check?: boolean
}
