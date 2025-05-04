declare module 'android' {
  export interface AndroidConfig {
    package: string;
    versionCode: number;
    permissions: string[];
  }
}

declare module 'ios' {
  export interface IOSConfig {
    bundleIdentifier: string;
    buildNumber: string;
  }
}

declare module 'src/*' {
  const content: any;
  export default content;
} 