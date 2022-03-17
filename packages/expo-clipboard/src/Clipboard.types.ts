// @needsAudit
export interface GetImageOptions {
  /**
   * The format of the clipboard image to be converted to.
   */
  format: 'png' | 'jpeg';
  /**
   * Specify the quality of the returned image, between `0` and `1`. Defaults to `1` (highest quality).
   * Applicable only when `format` is set to `jpeg`, ignored otherwise.
   * @default 1
   */
  jpegQuality?: number;
}

// @needsAudit
export interface ClipboardImage {
  /**
   * A Base64-encoded string of the image data.
   * Its format is dependent on the `format` option.
   *
   * > **NOTE:** The string is already prepended with `data:image/png;base64,` or `data:image/jpeg;base64,` prefix.
   *
   * You can use it directly as the source of an `Image` element.
   * @example
   * ```ts
   * <Image
   *   source={{ uri: clipboardImage.data }}
   *   style={{ width: 200, height: 200 }}
   * />
   * ```
   */
  data: string;
  /**
   * Dimensions (`width` and `height`) of the image pasted from clipboard.
   */
  size: {
    width: number;
    height: number;
  };
}

/**
 * Type used to determine string format stored in the clipboard.
 */
export enum StringFormat {
  PLAIN_TEXT = 'plainText',
  HTML = 'html',
}

export interface GetStringOptions {
  /**
   * The target format of the clipboard string to be converted to, if possible.
   *
   * On web, this option is ignored. The string is always returned without any conversion.
   *
   * @default `StringFormat.PLAIN_TEXT`
   */
  preferredFormat?: StringFormat;
}

export interface SetStringOptions {
  /**
   * The input format of the provided string.
   * Adjusting this option can help other applications interpret copied string properly.
   *
   * On web, this option is ignored. The string will be copied directly as-is, without any conversion.
   *
   * @default `StringFormat.PLAIN_TEXT`
   */
  inputFormat?: StringFormat;
}
