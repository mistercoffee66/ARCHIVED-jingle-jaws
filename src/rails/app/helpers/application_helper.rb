module ApplicationHelper
  def cc_html(options={}, &blk)
    attrs = options.map { |(k, v)| " #{h k}='#{h v}'" }.join('')
    ["<!--[if lt IE 7 ]> <html#{attrs} class='ie ie6 lte9 lte8 lte7'> <![endif]-->",
     "<!--[if IE 7 ]>    <html#{attrs} class='ie ie7 lte9 lte8 lte7'> <![endif]-->",
     "<!--[if IE 8 ]>    <html#{attrs} class='ie ie8 lte9 lte8'> <![endif]-->",
     "<!--[if IE 9 ]>    <html#{attrs} class='ie ie9 lte9'> <![endif]-->",
     "<!--[if (gt IE 9)|!(IE)]><!--> <html#{attrs}> <!--<![endif]-->",
     capture_haml(&blk).strip,
     "</html>"
    ].join("\n")
  end

  def h(str)
    ; Rack::Utils.escape_html(str);
  end
end
