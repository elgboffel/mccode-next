import { Page, PageData } from "@api/types/base/page";
import { ComponentType } from "@api/types/modules/componentType";

export type ContentPage = PageData<ComponentType[]>;

export type PageResponse = ContentPage;

export type PageNextPage = Page<ContentPage, never>;
