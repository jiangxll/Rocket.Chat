import { settings } from '../../../../app/settings';
import { Settings } from '../../../../app/models/server';

export const createSettings = () => {
	settings.add('Livechat_waiting_queue', false, {
		type: 'boolean',
		group: 'Omnichannel',
		section: 'Routing',
		i18nLabel: 'Waiting_queue',
	});

	settings.add('Livechat_waiting_queue_message', '', {
		type: 'string',
		group: 'Omnichannel',
		section: 'Routing',
		i18nLabel: 'Waiting_queue_message',
		i18nDescription: 'Waiting_queue_message_description',
		enableQuery: { _id: 'Livechat_waiting_queue', value: true },
	});

	settings.add('Livechat_maximum_chats_per_agent', 0, {
		type: 'int',
		group: 'Omnichannel',
		section: 'Routing',
		i18nLabel: 'Max_number_of_chats_per_agent',
		i18nDescription: 'Max_number_of_chats_per_agent_description',
		enableQuery: { _id: 'Livechat_waiting_queue', value: true },
	});

	settings.add('Livechat_number_most_recent_chats_estimate_wait_time', 100, {
		type: 'int',
		group: 'Omnichannel',
		section: 'Routing',
		i18nLabel: 'Number_of_most_recent_chats_estimate_wait_time',
		i18nDescription: 'Number_of_most_recent_chats_estimate_wait_time_description',
		enableQuery: { _id: 'Livechat_waiting_queue', value: true },
	});

	settings.add('Livechat_auto_close_inactive_rooms', false, {
		type: 'boolean',
		group: 'Omnichannel',
		section: 'Sessions',
		i18nLabel: 'Enable_omnichannel_auto_close_inactive_rooms',
		i18nDescription: 'Enable_omnichannel_auto_close_inactive_rooms_description',
	});

	settings.add('Livechat_auto_close_inactive_rooms_action', 'close', {
		type: 'select',
		group: 'Omnichannel',
		section: 'Sessions',
		values: [{
			key: 'close',
			i18nLabel: 'Close_room',
		}, {
			key: 'freeze',
			i18nLabel: 'Freeze_room',
		}],
		enableQuery: [{ _id: 'Livechat_auto_close_inactive_rooms', value: true }],
		i18nLabel: 'Livechat_auto_close_inactive_rooms_action',
		i18nDescription: 'Livechat_auto_close_inactive_rooms_action_description',
		public: true,
	});

	Settings.addOptionValueById('Livechat_Routing_Method', { key: 'Load_Balancing', i18nLabel: 'Load_Balancing' });
};
