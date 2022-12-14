import { FiCompass, FiHome, FiShare2, FiTool } from 'react-icons/fi';
import type { ConfigContext } from 'sanity';
import type { StructureBuilder } from 'sanity/desk';

export const structure = (S: StructureBuilder, context: ConfigContext) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Config')
        .icon(FiTool)
        .child(
          S.list()
            .title('Config')
            .items([
              S.listItem()
                .title('Menu config')
                .icon(FiCompass)
                .child(S.document().schemaType('menuConfig').documentId('menuConfig')),
              S.listItem()
                .title('Footer config')
                .icon(FiCompass)
                .child(S.document().schemaType('footerConfig').documentId('footerConfig')),
              S.listItem()
                .title('Metadata')
                .icon(FiShare2)
                .child(S.document().schemaType('defaultMetadata').documentId('defaultMetadata')),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Landing page')
        .icon(FiHome)
        .child(
          S.document().title('Landing page').schemaType('landingPage').documentId('landingPage')
        ),
      S.documentTypeListItem('page').title('Pages'),
    ]);
