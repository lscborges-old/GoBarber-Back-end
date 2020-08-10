import { container } from 'tsyringe';

import IMailTempleteProvider from './models/IMailTempleteProvider';

import HandlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
  handlebars: HandlebarsMailTemplateProvider,
};

container.registerSingleton<IMailTempleteProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
