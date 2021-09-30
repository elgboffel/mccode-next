import { MediaModule } from "@api/types/modules/media";
import { PersonModule } from "@api/types/modules/person";
import { ColumnsModule } from "@api/types/modules/columns";
import { TextModule } from "@api/types/modules/text";

export type ComponentType =
  | MediaModule
  | PersonModule
  | ColumnsModule
  | TextModule;
