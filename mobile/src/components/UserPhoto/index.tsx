import React from 'react';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Avatar } from './styles';

import avatarImg from '../../assets/avatar.png';

const SIZES = {
    SMALL: {
        containerSize: RFValue(32),
        avatarSize: RFValue(28)
    },
    NORMAL: {
        containerSize: RFValue(48),
        avatarSize: RFValue(42)
    }
};

interface AvatarProps {
    imageUri: string | undefined;
    sizes?: 'SMALL' | 'NORMAL';
}

const AVATAR_DEFAULT = Avatar.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUri, sizes = 'NORMAL' }: AvatarProps) {
    const { containerSize, avatarSize } = SIZES[sizes];

    return (
        <Avatar
            style={{
                width: avatarSize,
                height: avatarSize
            }}
            source={{ uri: imageUri || AVATAR_DEFAULT }}
            borderRadius={avatarSize / 2}
        />
    );
}
