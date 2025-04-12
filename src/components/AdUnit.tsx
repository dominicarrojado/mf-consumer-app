'use client';

import { useEffect } from 'react';
import { displayAd } from '@/lib/google-adsense';
import { cn } from '@/lib/utils';
import {
  GoogleAdSenseUnit,
  GoogleAdSenseUnitFormat,
  GoogleAdSenseUnitLayout,
} from '@/lib/enums';
import { GOOGLE_ADSENSE_CLIENT_ID } from '@/lib/constants';
import styles from './AdUnit.module.css';

type Props = {
  className?: string;
};

function AdUnit({ className }: Props) {
  useEffect(() => {
    displayAd();
  }, []);

  return (
    <div className={cn(className, 'px-[15px]')}>
      <ins
        className={cn('adsbygoogle block', styles.adunit)}
        data-ad-client={GOOGLE_ADSENSE_CLIENT_ID}
        data-ad-slot={GoogleAdSenseUnit.PROJECT_BODY}
        data-ad-format={GoogleAdSenseUnitFormat.FLUID}
        data-ad-layout={GoogleAdSenseUnitLayout.IN_ARTICLE}
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default AdUnit;
