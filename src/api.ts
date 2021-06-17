// this file includes types that are part of the library's public API

import * as certificatemanager from '@aws-cdk/aws-certificatemanager';
import * as route53 from '@aws-cdk/aws-route53';

/**
 * Domain configuration for the website.
 */
export interface Domain {
  /**
   * The root domain name where this instance of Construct Hub will be served.
   */
  readonly zone: route53.IHostedZone;

  /**
    * The certificate to use for serving the Construct Hub over a custom domain.
    *
    * @default - a DNS-Validated certificate will be provisioned using the
    *            provided `hostedZone`.
    */
  readonly cert: certificatemanager.ICertificate;
}

/**
 * CloudWatch alarm actions to perform.
 */
export interface AlarmActions {
  /**
   * The ARN of the CloudWatch alarm action to take for alarms of high-severity
   * alarms.
   *
   * This must be an ARN that can be used with CloudWatch alarms.
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-actions
   */
  readonly highSeverity: string;

  /**
   * The ARN of the CloudWatch alarm action to take for alarms of normal
   * severity.
   *
   * This must be an ARN that can be used with CloudWatch alarms.
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-actions
   *
   * @default - no actions are taken in response to alarms of normal severity
   */
  readonly normalSeverity?: string;
}