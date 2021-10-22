import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { AvatarContainer, Avatar } from './styles';

import avatarImg from '../../assets/avatar.png';
import { COLORS } from '../../theme';

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
        <AvatarContainer
            colors={[COLORS.PINK, COLORS.YELLOW]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.9, y: 1 }}
            style={{
                width: containerSize,
                height: containerSize,
                borderRadius: containerSize / 2
            }}
        >
            <Avatar
                style={{
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: avatarSize / 2
                }}
                source={{ uri: imageUri || AVATAR_DEFAULT }}
            />
        </AvatarContainer>
    );
}
