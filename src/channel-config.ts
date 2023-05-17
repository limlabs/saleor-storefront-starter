export const channelConfig =  {
    defaultChannel: 'default-channel',
    list: [
        'default-channel',
        'channel-pln'
    ]
} as const;

export type ChannelConfig = typeof channelConfig;

export type Channel = ChannelConfig['list'][number]