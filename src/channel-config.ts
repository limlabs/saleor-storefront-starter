export const channels =  {
    defaultChannel: 'default-channel',
    list: ['default-channel']
} as const;

export type ChannelConf = typeof channels;

export type Channel = ChannelConf['list'][number]