import validate from './validate-against-schema';
import noAnonymousOperations from './no-anonymous-operations';
import noOperationNameSuffix from './no-operation-name-suffix';
import requireDeprecationReason from './require-deprecation-reason';
import avoidOperationNamePrefix from './avoid-operation-name-prefix';
import noCaseInsensitiveEnumValuesDuplicates from './no-case-insensitive-enum-values-duplicates';
import requireDescription from './require-description';
import requireIdWhenAvailable from './require-id-when-available';
import descriptionStyle from './description-style';
import prettier from './prettier';
import namingConvention from './naming-convention';
import inputName from './input-name';
import { GraphQLESLintRule } from '../types';

export const rules: Record<string, GraphQLESLintRule> = {
  'validate-against-schema': validate,
  'no-anonymous-operations': noAnonymousOperations,
  'no-operation-name-suffix': noOperationNameSuffix,
  'require-deprecation-reason': requireDeprecationReason,
  'avoid-operation-name-prefix': avoidOperationNamePrefix,
  'no-case-insensitive-enum-values-duplicates': noCaseInsensitiveEnumValuesDuplicates,
  'require-description': requireDescription,
  'require-id-when-available': requireIdWhenAvailable,
  'description-style': descriptionStyle,
  prettier: prettier,
  'naming-convention': namingConvention,
  'input-name': inputName,
};
