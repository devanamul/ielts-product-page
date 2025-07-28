export type Medium = {
    name: string;
    resource_type: 'video' | 'image';
    resource_value: string;
    thumbnail_url?: string;
};

export interface Checklist {
    text: string;
    icon: string;
}

export interface Section {
    type: string;
    title?: string;
    values: any[];
    name: string;
}

export interface CtaText {
    name: string;
    value: string;
}

export interface Seo {
    title: string;
    description: string;
}

export type ProductData = {
    title: string;
    description: string;
    media: Medium[];
    sections: Section[];
    checklist?: Checklist[];
    cta_text?: CtaText;
    seo?: {
        title?: string;
        description?: string;
    };
};