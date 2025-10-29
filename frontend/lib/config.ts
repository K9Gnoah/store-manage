export type RuntimeConfig = {
    apiBaseUrl: string;
    supabaseUrl?: string;
    supabaseAnonKey?: string;
};

let cachedConfig: RuntimeConfig | null = null;

export async function loadRuntimeConfig(): Promise<RuntimeConfig> {
    if (cachedConfig) return cachedConfig;
    try {
        const res = await fetch('/config.json', { cache: 'no-store' });
        const json = (await res.json()) as RuntimeConfig;
        cachedConfig = json;
        return json;
    } catch {
        return { apiBaseUrl: '' };
    }
}


