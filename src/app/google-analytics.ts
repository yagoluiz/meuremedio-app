export class GoogleAnalytics {

  private static googleAnalytics(...fields: any[]): void {
    (window as any).ga(...fields);
  }

  // https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications?hl=pt-br
  public static sendPageViewForPage(nomePage: string): void {
    GoogleAnalytics.googleAnalytics('set', 'page', nomePage);
    GoogleAnalytics.googleAnalytics('send', 'pageview');
  }

  // https://developers.google.com/analytics/devguides/collection/analyticsjs/events?hl=pt-br
  public static sendEvent(eventCategory: string, eventAction: string, eventLabel: string = ''): void {
    GoogleAnalytics.googleAnalytics('send', {
      hitType: 'event',
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLabel
    });
  }
}