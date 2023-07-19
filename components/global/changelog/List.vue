<script lang="ts">
export default defineComponent({
  name: 'ChangelogList',

  props: {
    type: {
      type: String,
      default: 'new'
    }
  },

  setup (props) {
    const slots = useSlots()
    const { flatUnwrap, unwrap } = useUnwrap()

    const iconMap: Record<string, string> = {
      new: 'mdi:plus',
      update: 'mdi:circle-edit-outline',
      fix: 'mdi:bug-check-outline',
      remove: 'mdi:minus',
      deprecated: 'mdi:alert-circle-outline'
    };
    const iconName = iconMap[props.type] ?? 'mdi:check';

    const typeMap: Record<string, string> = {
      new: 'success',
      update: 'info',
      fix: 'warning',
      remove: 'danger',
      deprecated: 'danger'
    };
    const type = typeMap[props.type] ?? 'neutral';

    return () => {
      const newItems = flatUnwrap((slots.default && slots.default()) ?? [], ['ul']).map(li => unwrap(li, ['li']))

      return h('ul',
        newItems.map(item =>
          h('li', [
            h('span', { class: `list-icon ${type}` }, h(resolveComponent('icon'), { name: iconName, class: 'icon' })),
            h('span', h(resolveComponent('ContentSlot'), { use: () => item }))
          ])
        )
      );
    }
  }
})
</script>

<style scoped lang="ts">
css({
  li: {
    marginBottom: '{elements.list.item.marginBottom}',
    display: 'flex',
    alignItems: 'flex-start',
    '&:last-child': {
      marginBottom: '{elements.list.item.lastChild.marginBottom}'
    },
    '.list-icon': {
      display: 'flex',
      marginInlineEnd: '{elements.list.item.icon.marginInlineEnd}',
      flexShrink: 0,
      padding: '{elements.list.item.icon.padding}',
      borderRadius: '{elements.list.item.icon.borderRadius}',
      boxShadow: '{elements.list.item.icon.boxShadow}',
      '&.primary': {
        color: '{elements.state.primary.color.primary}',
        backgroundColor: '{elements.state.primary.backgroundColor.secondary}'
      },
      '&.secondary': {
        color: '{elements.state.secondary.color.primary}',
        backgroundColor: '{elements.state.secondary.backgroundColor.secondary}'
      },
      '&.neutral': {
        color: '{elements.state.neutral.color.primary}',
        backgroundColor: '{elements.state.neutral.backgroundColor.secondary}'
      },
      '&.info': {
        color: '{elements.state.info.color.primary}',
        backgroundColor: '{elements.state.info.backgroundColor.secondary}'
      },
      '&.success': {
        color: '{elements.state.success.color.primary}',
        backgroundColor: '{elements.state.success.backgroundColor.secondary}'
      },
      '&.warning': {
        color: '{elements.state.warning.color.primary}',
        backgroundColor: '{elements.state.warning.backgroundColor.secondary}'
      },
      '&.danger': {
        color: '{elements.state.danger.color.primary}',
        backgroundColor: '{elements.state.danger.backgroundColor.secondary}'
      },
      '.icon': {
        width: '{elements.list.item.icon.width}',
        height: '{elements.list.item.icon.height}',
      }
    }
  }
})
</style>