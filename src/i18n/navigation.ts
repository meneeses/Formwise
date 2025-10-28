// src/i18n/navigation.ts
import {createNavigation} from 'next-intl/navigation';
import {locales} from './config';

export const {Link, useRouter, usePathname, redirect} =
  createNavigation({locales});
