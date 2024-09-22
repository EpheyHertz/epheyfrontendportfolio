import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    typescript:{
        ignoreBuildErrors:true,
    }
};

